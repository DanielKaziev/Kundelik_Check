// @ts-nocheck
import {
  OneSO,
  OneFO,
  CallOneSO,
  CallOneFO,
  enableSum,
  disableSum,
  enableSoch,
  disableSoch,
  FOPlan
} from '../src/index';

const buildDom = () => {
  document.head.innerHTML = '<meta name="theme-color" content="#ffffff" />';
  document.body.innerHTML = `
    <input id="sum" value="" />
    <input id="quan" value="" />
    <input id="sor1" value="" />
    <input id="sor2" value="" />
    <input id="sor3" value="" />
    <input id="sor4" value="" />
    <input id="sor5" value="" />
    <input id="sor6" value="" />
    <input id="sor7" value="" />
    <input id="sor8" value="" />
    <input id="soch1-new" value="" />
    <input id="soch2-new" value="" />
    <input id="op-in-new" value="" />
    <input id="soch-in-new" value="" />
    <input id="fo1" value="" />
    <input id="so1" value="" />
    <input id="so2" value="" />
    <input id="sor/soch" type="checkbox" />
    <input id="fo-pln" type="checkbox" />
    <div id="so-container" hidden></div>
    <div id="fo-container" hidden></div>
    <div id="new-container" hidden></div>
    <div id="output-so" hidden></div>
    <div id="output-so-help" hidden></div>
    <div id="output-so-help-new" hidden></div>
    <div id="output-pre"></div>
    <div id="output-pre-otv"></div>
    <div id="so-main"></div>
    <div id="fo-main"></div>
    <div id="output-fo"></div>
    <div id="output-fo-one"></div>
    <div id="output-fo-two" hidden></div>
  <div id="output-fo-three"></div>
    <div id="output-fo-help" hidden></div>
    <div id="output-fo-help-new" hidden></div>
    <div id="op-out-new"></div>
    <div id="soch-out-new"></div>
    <div id="summa-out-new"></div>
    <div id="output-text-new"></div>
    <div id="op-one" hidden></div>
    <div id="op-two" hidden></div>
    <div id="soch-one" hidden></div>
    <div id="soch-two" hidden></div>
    <div id="sor_1"></div>
    <div id="sor_2"></div>
    <div id="sor_3"></div>
    <div id="sor_4"></div>
    <div id="soch-new"></div>
  `;
};

beforeEach(() => {
  buildDom();
});

describe('index.ts behaviors', () => {
  test('OneSO calculates percentage and updates UI for passing result', () => {
    document.getElementById('so1').value = '40';
    document.getElementById('so2').value = '50';

    OneSO();

    expect(document.getElementById('output-pre').innerHTML).toBe('80.0%');
    expect(document.getElementById('output-pre-otv').innerHTML).toBe('ХОР(4)');
    expect(document.getElementById('so-main').style.backgroundColor).toBe('rgb(194, 210, 58)');
    expect(document.querySelector('meta[name="theme-color"]').getAttribute('content')).toBe('#c2d23a');
    expect(document.getElementById('output-so-help').hasAttribute('hidden')).toBe(false);
  });

  test('OneSO marks error when percentage is out of range', () => {
    document.getElementById('so1').value = '200';
    document.getElementById('so2').value = '100';

    OneSO();

    expect(document.getElementById('output-pre').innerHTML).toBe('ERROR');
    expect(document.getElementById('output-pre-otv').innerHTML).toBe('ERROR');
    expect(document.getElementById('output-pre').style.backgroundColor).toBe('rgb(255, 102, 102)');
    expect(document.getElementById('output-pre-otv').style.backgroundColor).toBe('rgb(255, 102, 102)');
    expect(document.querySelector('meta[name="theme-color"]').getAttribute('content')).toBe('#ff6666');
  });

  test('FOPlan aggregates inputs and renders quarter grade', () => {
    document.getElementById('sum').value = '30';
    document.getElementById('quan').value = '3';
    document.getElementById('sor1').value = '5';
    document.getElementById('sor2').value = '5';
    document.getElementById('sor3').value = '5';
    document.getElementById('sor4').value = '5';
    document.getElementById('sor5').value = '5';
    document.getElementById('sor6').value = '5';
    document.getElementById('sor7').value = '5';
    document.getElementById('sor8').value = '5';
    document.getElementById('soch1-new').value = '30';
    document.getElementById('soch2-new').value = '60';
    document.getElementById('op-in-new').value = '0';
    document.getElementById('soch-in-new').value = '0';

    FOPlan();

    expect(document.getElementById('op-out-new').innerHTML).toBe('50.0%');
    expect(document.getElementById('soch-out-new').innerHTML).toBe('25.0%');
    expect(document.getElementById('summa-out-new').innerHTML).toBe('75%');
    expect(document.getElementById('output-text-new').innerHTML).toBe('Оценка за четверть: 4');
    expect(document.getElementById('sor_1').style.backgroundColor).toBe('rgb(194, 210, 58)');
    expect(document.getElementById('sum').disabled).toBe(false);
  });

  test('FOPlan renders failing quarter grade when percentage below 40', () => {
    document.getElementById('op-in-new').value = '20';

    FOPlan();

    expect(document.getElementById('summa-out-new').innerHTML).toBe('20%');
    expect(document.getElementById('output-text-new').innerHTML).toBe('Оценка за четверть: 2');
    expect(document.getElementById('output-text-new').style.backgroundColor).toBe('rgb(255, 102, 102)');
    expect(document.querySelector('meta[name="theme-color"]').getAttribute('content')).toBe('#ff6666');
    expect(document.getElementById('op-one').hasAttribute('hidden')).toBe(false);
  });

  test('FOPlan renders satisfactory quarter grade when percentage between 40 and 65', () => {
    document.getElementById('soch-in-new').value = '60';

    FOPlan();

    expect(document.getElementById('summa-out-new').innerHTML).toBe('60%');
    expect(document.getElementById('output-text-new').innerHTML).toBe('Оценка за четверть: 3');
    expect(document.getElementById('output-text-new').style.backgroundColor).toBe('rgb(249, 162, 59)');
    expect(document.querySelector('meta[name="theme-color"]').getAttribute('content')).toBe('#f9a23b');
    expect(document.getElementById('soch-one').hasAttribute('hidden')).toBe(false);
  });

  test('FOPlan renders excellent quarter grade when percentage above 85', () => {
    document.getElementById('op-in-new').value = '45';
    document.getElementById('soch-in-new').value = '45';

    FOPlan();

    expect(document.getElementById('summa-out-new').innerHTML).toBe('90%');
    expect(document.getElementById('output-text-new').innerHTML).toBe('Оценка за четверть: 5');
    expect(document.getElementById('output-text-new').style.backgroundColor).toBe('rgb(194, 210, 58)');
    expect(document.querySelector('meta[name="theme-color"]').getAttribute('content')).toBe('#c2d23a');
    expect(document.getElementById('sum').disabled).toBe(true);
    expect(document.getElementById('soch1-new').disabled).toBe(true);
  });

  test('OneFO maps formative score to descriptions and colors', () => {
    document.getElementById('fo1').value = '2';

    OneFO();

    expect(document.getElementById('output-fo-one').innerHTML).toBe('Оценка: 2 (ПЛХ)');
    expect(document.getElementById('output-fo').innerHTML).toContain('Выполнил до 20 % учебных заданий');
    expect(document.getElementById('output-fo-one').style.backgroundColor).toBe('rgb(255, 102, 102)');
    expect(document.getElementById('output-fo-two').hasAttribute('hidden')).toBe(false);
    expect(document.querySelector('meta[name="theme-color"]').getAttribute('content')).toBe('#ff6666');
  });

  test('OneFO highlights excellent performance for maximum score', () => {
    document.getElementById('fo1').value = '10';

    OneFO();

    expect(document.getElementById('output-fo-one').innerHTML).toBe('Оценка: 5 (ОТЛ)');
    expect(document.getElementById('output-fo-one').style.backgroundColor).toBe('rgb(194, 210, 58)');
    expect(document.getElementById('output-fo-three').innerHTML).toBe('Уровень знаний: высокий');
    expect(document.getElementById('output-fo-help').hasAttribute('hidden')).toBe(false);
    expect(document.querySelector('meta[name="theme-color"]').getAttribute('content')).toBe('#c2d23a');
  });

  test('CallOneSO toggles containers and triggers single summative calculation', () => {
    document.getElementById('so1').value = '30';
    document.getElementById('so2').value = '40';
    document.getElementById('sor/soch').checked = true;
    document.getElementById('fo-pln').checked = true;

    CallOneSO();

    expect(document.getElementById('fo-pln').checked).toBe(false);
    expect(document.getElementById('so-container').hasAttribute('hidden')).toBe(false);
    expect(document.getElementById('new-container').hasAttribute('hidden')).toBe(true);
    expect(document.getElementById('fo-container').hasAttribute('hidden')).toBe(true);
    expect(document.getElementById('output-so-help').hasAttribute('hidden')).toBe(false);
    expect(document.getElementById('output-pre').innerHTML).toBe('75.0%');
  });

  test('CallOneFO shows formative container and hides others', () => {
    document.getElementById('fo-pln').checked = true;
    document.getElementById('sor/soch').checked = true;

    CallOneFO();

    expect(document.getElementById('sor/soch').checked).toBe(false);
    expect(document.getElementById('fo-container').hasAttribute('hidden')).toBe(false);
    expect(document.getElementById('so-container').hasAttribute('hidden')).toBe(true);
    expect(document.getElementById('new-container').hasAttribute('hidden')).toBe(true);
  });

  test('enableSum and disableSum toggle field accessibility and view state', () => {
    disableSum();

    expect(document.getElementById('sum').disabled).toBe(true);
    expect(document.getElementById('op-one').hasAttribute('hidden')).toBe(false);
    expect(document.getElementById('op-two').hasAttribute('hidden')).toBe(true);

    enableSum();

    expect(document.getElementById('sum').disabled).toBe(false);
    expect(document.getElementById('op-one').hasAttribute('hidden')).toBe(true);
    expect(document.getElementById('op-two').hasAttribute('hidden')).toBe(false);
  });

  test('enableSoch and disableSoch toggle СОЧ inputs and outputs', () => {
    disableSoch();

    expect(document.getElementById('soch1-new').disabled).toBe(true);
    expect(document.getElementById('soch-one').hasAttribute('hidden')).toBe(false);
    expect(document.getElementById('soch-two').hasAttribute('hidden')).toBe(true);

    enableSoch();

    expect(document.getElementById('soch1-new').disabled).toBe(false);
    expect(document.getElementById('soch-one').hasAttribute('hidden')).toBe(true);
    expect(document.getElementById('soch-two').hasAttribute('hidden')).toBe(false);
  });
});
