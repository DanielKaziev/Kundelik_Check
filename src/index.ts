const COLOR_ERROR = '#ff6666';
const COLOR_WARNING = '#f9a23b';
const COLOR_SUCCESS = '#c2d23a';
const THEME_META_SELECTOR = 'meta[name=theme-color]';

type ElementId =
  | 'sum'
  | 'quan'
  | 'sor1'
  | 'sor2'
  | 'sor3'
  | 'sor4'
  | 'sor5'
  | 'sor6'
  | 'sor7'
  | 'sor8'
  | 'soch1-new'
  | 'soch2-new'
  | 'op-in-new'
  | 'soch-in-new'
  | 'fo1'
  | 'so1'
  | 'so2';

type CheckboxId = 'sor/soch' | 'fo-pln';

const SUM_FIELD_IDS: ReadonlyArray<ElementId> = [
  'sum',
  'quan',
  'sor1',
  'sor2',
  'sor3',
  'sor4',
  'sor5',
  'sor6',
  'sor7',
  'sor8'
];

const SOCH_FIELD_IDS: ReadonlyArray<ElementId> = ['soch1-new', 'soch2-new'];

const getElementById = <T extends HTMLElement>(id: string): T => {
  const element = document.getElementById(id);
  if (!element) {
    throw new Error(`Element with id "${id}" not found`);
  }
  return element as T;
};

const getInput = (id: ElementId): HTMLInputElement => getElementById<HTMLInputElement>(id);

const getCheckbox = (id: CheckboxId): HTMLInputElement => getElementById<HTMLInputElement>(id);

const setHiddenState = (element: HTMLElement, hidden: boolean): void => {
  if (hidden) {
    element.setAttribute('hidden', 'hidden');
  } else {
    element.removeAttribute('hidden');
  }
};

const setThemeColor = (color: string): void => {
  const meta = document.querySelector(THEME_META_SELECTOR) as HTMLMetaElement | null;
  if (meta) {
    meta.setAttribute('content', color);
  }
};

const setBackground = (id: string, color: string): void => {
  getElementById<HTMLElement>(id).style.backgroundColor = color;
};

const setElementText = (id: string, value: string): void => {
  getElementById<HTMLElement>(id).innerHTML = value;
};

const toggleInputsDisabled = (ids: ReadonlyArray<ElementId>, disabled: boolean): void => {
  ids.forEach((fieldId) => {
    getInput(fieldId).disabled = disabled;
  });
};

function CheckIsEmpty(): void {
  const sumInput = getInput('sum');
  const quanInput = getInput('quan');
  const sorInputs = [
    getInput('sor1'),
    getInput('sor2'),
    getInput('sor3'),
    getInput('sor4'),
    getInput('sor5'),
    getInput('sor6'),
    getInput('sor7'),
    getInput('sor8')
  ];
  const sochInputs = [getInput('soch1-new'), getInput('soch2-new')];
  const opInInput = getInput('op-in-new');
  const sochInInput = getInput('soch-in-new');

  const values = [
    sumInput.value,
    quanInput.value,
    ...sorInputs.map((input) => input.value),
    ...sochInputs.map((input) => input.value),
    opInInput.value,
    sochInInput.value
  ];

  const allEmpty = values.every((value) => value === '');
  if (allEmpty) {
    const outputText = getElementById<HTMLElement>('output-text-new');
    outputText.innerHTML = '';
    outputText.removeAttribute('style');
  }

  const foInput = getInput('fo1');
  if (foInput.value === '') {
    setHiddenState(getElementById<HTMLElement>('output-fo-help'), true);
    setHiddenState(getElementById<HTMLElement>('output-fo-help-new'), true);
    setHiddenState(getElementById<HTMLElement>('output-fo-two'), true);
    setBackground('fo-main', COLOR_SUCCESS);
  }

  const so1Input = getInput('so1');
  const so2Input = getInput('so2');
  if (so1Input.value === '' && so2Input.value === '') {
    setBackground('so-main', COLOR_SUCCESS);
    setHiddenState(getElementById<HTMLElement>('output-so-help'), true);
  }

  if (getInput('sor1').value === '' && getInput('sor2').value === '') {
    setBackground('sor_1', COLOR_SUCCESS);
  }
  if (getInput('sor3').value === '' && getInput('sor4').value === '') {
    setBackground('sor_2', COLOR_SUCCESS);
  }
  if (getInput('sor5').value === '' && getInput('sor6').value === '') {
    setBackground('sor_3', COLOR_SUCCESS);
  }
  if (getInput('sor7').value === '' && getInput('sor8').value === '') {
    setBackground('sor_4', COLOR_SUCCESS);
  }
  if (getInput('soch1-new').value === '' && getInput('soch2-new').value === '') {
    setBackground('soch-new', COLOR_SUCCESS);
  }
}

function CallOneSO(): void {
  const soCheckbox = getCheckbox('sor/soch');
  const foCheckbox = getCheckbox('fo-pln');
  const soContainer = getElementById<HTMLElement>('so-container');
  const newContainer = getElementById<HTMLElement>('new-container');
  const foContainer = getElementById<HTMLElement>('fo-container');
  const outputSo = getElementById<HTMLElement>('output-so');

  if (soCheckbox.checked) {
    foCheckbox.checked = false;
    setHiddenState(soContainer, false);
    setHiddenState(newContainer, true);
    setHiddenState(foContainer, true);
    OneSO();
  } else {
    setHiddenState(soContainer, true);
    setHiddenState(foContainer, true);
    setHiddenState(newContainer, false);
    setHiddenState(outputSo, false);
  }
}

function OneSO(): void {
  const so1 = Number(getInput('so1').value);
  const so2 = Number(getInput('so2').value);

  const outputPre = getElementById<HTMLElement>('output-pre');
  const outputPreAnswer = getElementById<HTMLElement>('output-pre-otv');
  const soMain = getElementById<HTMLElement>('so-main');

  let resultSo = so2 === 0 ? NaN : (so1 / so2) * 100;

  if (Number.isNaN(resultSo) || !Number.isFinite(resultSo)) {
    outputPre.innerHTML = '0%';
    resultSo = 0;
  } else {
    outputPre.innerHTML = `${resultSo.toFixed(1)}%`;
  }

  const outputSoHelp = getElementById<HTMLElement>('output-so-help');

  if (resultSo < 0) {
    outputPre.innerHTML = 'ERROR';
    outputPreAnswer.innerHTML = 'ERROR';
    outputPre.style.backgroundColor = COLOR_ERROR;
    outputPreAnswer.style.backgroundColor = COLOR_ERROR;
    setThemeColor(COLOR_ERROR);
    setHiddenState(outputSoHelp, false);
  } else if (resultSo >= 0 && resultSo < 40) {
    outputPre.style.backgroundColor = COLOR_ERROR;
    outputPreAnswer.style.backgroundColor = COLOR_ERROR;
    soMain.style.backgroundColor = COLOR_ERROR;
    outputPreAnswer.innerHTML = 'ПЛХ(2)';
    setThemeColor(COLOR_ERROR);
    setHiddenState(outputSoHelp, false);
  } else if (resultSo >= 40 && resultSo < 65) {
    outputPre.style.backgroundColor = COLOR_WARNING;
    outputPreAnswer.style.backgroundColor = COLOR_WARNING;
    soMain.style.backgroundColor = COLOR_WARNING;
    outputPreAnswer.innerHTML = 'УДВ(3)';
    setThemeColor(COLOR_WARNING);
    setHiddenState(outputSoHelp, false);
  } else if (resultSo >= 65 && resultSo < 85) {
    outputPre.style.backgroundColor = COLOR_SUCCESS;
    outputPreAnswer.style.backgroundColor = COLOR_SUCCESS;
    soMain.style.backgroundColor = COLOR_SUCCESS;
    outputPreAnswer.innerHTML = 'ХОР(4)';
    setThemeColor(COLOR_SUCCESS);
    setHiddenState(outputSoHelp, false);
  } else if (resultSo >= 85 && resultSo <= 100) {
    outputPre.style.backgroundColor = COLOR_SUCCESS;
    outputPreAnswer.style.backgroundColor = COLOR_SUCCESS;
    soMain.style.backgroundColor = COLOR_SUCCESS;
    outputPreAnswer.innerHTML = 'ОТЛ(5)';
    setThemeColor(COLOR_SUCCESS);
    setHiddenState(outputSoHelp, false);
  } else if (resultSo > 100) {
    outputPre.innerHTML = 'ERROR';
    outputPreAnswer.innerHTML = 'ERROR';
    outputPre.style.backgroundColor = COLOR_ERROR;
    outputPreAnswer.style.backgroundColor = COLOR_ERROR;
    setThemeColor(COLOR_ERROR);
    setHiddenState(outputSoHelp, false);
  }
  CheckIsEmpty();
}

function OneFO(): void {
  const fo = Number(getInput('fo1').value);
  const outputFo = getElementById<HTMLElement>('output-fo');
  const outputFoOne = getElementById<HTMLElement>('output-fo-one');
  const outputFoThree = getElementById<HTMLElement>('output-fo-three');

  const foMain = getElementById<HTMLElement>('fo-main');
  const outputFoTwoWrapper = getElementById<HTMLElement>('output-fo-two');
  const outputFoHelp = getElementById<HTMLElement>('output-fo-help');
  const outputFoHelpNew = getElementById<HTMLElement>('output-fo-help-new');

  const descriptions = [
    'Выполнил до 10 % учебных заданий, допущены ошибки, на уроке пассивный, не делает выводы по итогам обратной связи с учителем, не проявляет самостоятельность при выполнении заданий, не знает пройденный материал',
    'Выполнил до 20 % учебных заданий, допущены ошибки, на уроке пассивный, не всегда делает соответствующие выводы по итогам обратной связи с учителем, не проявляет самостоятельность при выполнении заданий',
    'Выполнил до 30 % учебных заданий, допущены ошибки, стремится исправить свои ошибки, на уроке иногда проявляет активность, нуждается в поддержке учителя/родителей/сверстников при выполнений учебных заданий',
    'Выполнил до 40 % учебных заданий, допустил ошибки, нуждается в помощи при исправлении ошибок, не всегда проявляет активность, иногда  проявляет самостоятельность при выполнении заданий',
    'Выполнил до 50 % учебных заданий, допустил до 5-ти ошибок, нуждается в помощи учителя, на уроке не всегда активный, иногда проявляет самостоятельность при выполнении посильных заданий',
    'Выполнил до 60 % учебных заданий, допустил до 4-х ошибок, нуждается в помощи учителя, на уроке проявляет старательность, самостоятельно может выполнить задания средней сложности',
    'Выполнил до 70 % учебных заданий, допустил до 3-х ошибок, своевременно устранил ошибки, на уроке активный, проявляет самостоятельность при выполнении заданий',
    'Выполнил до 80 % учебных заданий, допустил 1-2 незначительных ошибок, на основе комментариев учителя самостоятельно исправляет свои ошибки, активный, самостоятельный',
    'Выполнил до 90 % учебных заданий, допустил незначительные неточности при выполнении  заданий, работает над ошибками, активный, самостоятельный',
    'Выполнил 100 % учебных заданий, не допустил ошибок, активный, самостоятельный, может объяснить, обосновать свои ответы'
  ];

  const ratingTemplates = [
    'Оценка: 2 (ПЛХ)',
    'Оценка: 2 (ПЛХ)',
    'Оценка: 2 (ПЛХ)',
    'Оценка: 2 (ПЛХ)',
    'Оценка: 3 (УДВ)',
    'Оценка: 3 (УДВ)',
    'Оценка: 3 (УДВ)',
    'Оценка: 4 (ХОР)',
    'Оценка: 4 (ХОР)',
    'Оценка: 5 (ОТЛ)'
  ];

  const knowledgeLevels = [
    'Уровень знаний: низкий',
    'Уровень знаний: низкий',
    'Уровень знаний: низкий',
    'Уровень знаний: низкий',
    'Уровень знаний: средний',
    'Уровень знаний: средний',
    'Уровень знаний: средний',
    'Уровень знаний: высокий',
    'Уровень знаний: высокий',
    'Уровень знаний: высокий'
  ];

  const applyState = (color: string, rating: string, description: string, level: string): void => {
    foMain.style.backgroundColor = color;
    outputFoOne.style.backgroundColor = color;
    outputFoTwoWrapper.style.backgroundColor = color;
    outputFoThree.style.backgroundColor = color;
    outputFoOne.innerHTML = rating;
    outputFo.innerHTML = description;
    outputFoThree.innerHTML = level;
    setThemeColor(color);
    setHiddenState(outputFoTwoWrapper, false);
    setHiddenState(outputFoHelp, false);
    setHiddenState(outputFoHelpNew, false);
  };

  const foIndexMap: { [key: number]: number } = {
    0: 0,
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    6: 5,
    7: 6,
    8: 7,
    9: 8,
    10: 9
  };

  if (Number.isInteger(fo) && fo >= 0 && fo <= 10) {
    const mappedIndex = foIndexMap[fo];
    const color = fo <= 3 ? COLOR_ERROR : fo <= 6 ? COLOR_WARNING : COLOR_SUCCESS;
    applyState(color, ratingTemplates[mappedIndex], descriptions[mappedIndex], knowledgeLevels[mappedIndex]);
    if (fo === 7) {
      outputFoThree.style.backgroundColor = COLOR_WARNING;
    }
  } else {
    applyState(COLOR_ERROR, 'ERROR', 'Упс, у вас ошибка.', 'ERROR');
  }
  CheckIsEmpty();
}

function CallOneFO(): void {
  const foCheckbox = getCheckbox('fo-pln');
  const soCheckbox = getCheckbox('sor/soch');
  const soContainer = getElementById<HTMLElement>('so-container');
  const newContainer = getElementById<HTMLElement>('new-container');
  const foContainer = getElementById<HTMLElement>('fo-container');

  if (foCheckbox.checked) {
    soCheckbox.checked = false;
    setHiddenState(soContainer, true);
    setHiddenState(newContainer, true);
    setHiddenState(foContainer, false);
  } else {
    setHiddenState(soContainer, true);
    setHiddenState(foContainer, true);
    setHiddenState(newContainer, false);
  }
}

function enableSum(): void {
  toggleInputsDisabled(SUM_FIELD_IDS, false);
  setHiddenState(getElementById<HTMLElement>('op-two'), false);
  setHiddenState(getElementById<HTMLElement>('op-one'), true);
}

function disableSum(): void {
  toggleInputsDisabled(SUM_FIELD_IDS, true);
  setHiddenState(getElementById<HTMLElement>('op-one'), false);
  setHiddenState(getElementById<HTMLElement>('op-two'), true);
}

function enableSoch(): void {
  toggleInputsDisabled(SOCH_FIELD_IDS, false);
  setHiddenState(getElementById<HTMLElement>('soch-two'), false);
  setHiddenState(getElementById<HTMLElement>('soch-one'), true);
}

function disableSoch(): void {
  toggleInputsDisabled(SOCH_FIELD_IDS, true);
  setHiddenState(getElementById<HTMLElement>('soch-one'), false);
  setHiddenState(getElementById<HTMLElement>('soch-two'), true);
}

function FOPlan(): void {
  const sumInput = getInput('sum');
  const quanInput = getInput('quan');
  const sor1Input = getInput('sor1');
  const sor2Input = getInput('sor2');
  const sor3Input = getInput('sor3');
  const sor4Input = getInput('sor4');
  const sor5Input = getInput('sor5');
  const sor6Input = getInput('sor6');
  const sor7Input = getInput('sor7');
  const sor8Input = getInput('sor8');
  const soch1Input = getInput('soch1-new');
  const soch2Input = getInput('soch2-new');
  const opInNewInput = getInput('op-in-new');
  const sochInNewInput = getInput('soch-in-new');

  const sum = Number(sumInput.value);
  const quan = Number(quanInput.value);
  const sor1 = Number(sor1Input.value);
  const sor2 = Number(sor2Input.value);
  const sor3 = Number(sor3Input.value);
  const sor4 = Number(sor4Input.value);
  const sor5 = Number(sor5Input.value);
  const sor6 = Number(sor6Input.value);
  const sor7 = Number(sor7Input.value);
  const sor8 = Number(sor8Input.value);
  const soch1New = Number(soch1Input.value);
  const soch2New = Number(soch2Input.value);
  const opInNew = Number(opInNewInput.value);
  const sochInNew = Number(sochInNewInput.value);

  const opOutNew = getElementById<HTMLElement>('op-out-new');
  const sochOutNew = getElementById<HTMLElement>('soch-out-new');
  const summaOutNew = getElementById<HTMLElement>('summa-out-new');
  const outputTextNew = getElementById<HTMLElement>('output-text-new');

  const prem1 = [sor1, sor3, sor5, sor7];
  const prem2 = [sor2, sor4, sor6, sor8];
  const prem1Checked = prem1.reduce((acc, value) => acc + value, 0);
  const prem2Checked = prem2.reduce((acc, value) => acc + value, 0);

  const sumOp = sum + quan + prem1Checked + prem2Checked;
  const sumSoch = soch1New + soch2New;

  let resultFixNew = 0;

  const calculateOpResult = (): number => {
    const quanResult = quan * 10;
    const opResult = ((prem1Checked + sum) / (prem2Checked + quanResult)) * 50;
    if (!Number.isFinite(opResult) || Number.isNaN(opResult)) {
      opOutNew.innerHTML = '0.0%';
      return 0;
    }
    opOutNew.innerHTML = `${opResult.toFixed(1)}%`;
    return Number(opResult.toFixed(1));
  };

  const calculateSochResult = (): number => {
    const resultSochNew = (soch1New / soch2New) * 50;
    if (!Number.isFinite(resultSochNew) || Number.isNaN(resultSochNew)) {
      sochOutNew.innerHTML = '0.0%';
      return 0;
    }
    sochOutNew.innerHTML = `${resultSochNew.toFixed(1)}%`;
    return Number(resultSochNew.toFixed(1));
  };

  if (sumOp > 0 && sumSoch > 0) {
    enableSum();
    enableSoch();

    const opResultFix = calculateOpResult();
    const resultSochFixNew = calculateSochResult();
    const resultNew = opResultFix + resultSochFixNew;
    resultFixNew = Number(resultNew.toFixed());
    summaOutNew.innerHTML = `${resultFixNew}%`;
  } else if (sumOp > 0 && sochInNew > 0) {
    enableSum();
    disableSoch();

    const opResultFix = calculateOpResult();
    const resultNew = opResultFix + sochInNew;
    resultFixNew = Number(resultNew.toFixed());
    summaOutNew.innerHTML = `${resultFixNew}%`;
  } else if (opInNew > 0 && sumSoch > 0) {
    disableSum();
    enableSoch();

    const resultSochFixNew = calculateSochResult();
    const resultNew = opInNew + resultSochFixNew;
    resultFixNew = Number(resultNew.toFixed());
    summaOutNew.innerHTML = `${resultFixNew}%`;
  } else if (opInNew > 0 && sochInNew > 0) {
    disableSum();
    disableSoch();

    const resultNew = opInNew + sochInNew;
    resultFixNew = Number(resultNew.toFixed());
    summaOutNew.innerHTML = `${resultFixNew}%`;
  } else if (
    sumInput.value.length > 0 ||
    quanInput.value.length > 0 ||
    sor1Input.value.length > 0 ||
    sor2Input.value.length > 0 ||
    sor3Input.value.length > 0 ||
    sor4Input.value.length > 0 ||
    sor5Input.value.length > 0 ||
    sor6Input.value.length > 0 ||
    sor7Input.value.length > 0 ||
    sor8Input.value.length > 0
  ) {
    enableSum();
    setHiddenState(getElementById<HTMLElement>('soch-one'), false);
    setHiddenState(getElementById<HTMLElement>('soch-two'), true);

    const opResultFix = calculateOpResult();
    resultFixNew = Number(opResultFix.toFixed());
    summaOutNew.innerHTML = `${resultFixNew}%`;
  } else if (soch1Input.value.length > 0 || soch2Input.value.length > 0) {
    enableSoch();

    const resultSochFixNew = calculateSochResult();
    const resultNew = Number(resultSochFixNew.toFixed(1));
    resultFixNew = Number(resultNew.toFixed());
    summaOutNew.innerHTML = `${resultFixNew}%`;
  } else if (opInNew > 0) {
    disableSum();
    soch1Input.disabled = false;
    soch2Input.disabled = false;
    setHiddenState(getElementById<HTMLElement>('soch-one'), false);
    setHiddenState(getElementById<HTMLElement>('soch-two'), true);

    resultFixNew = Number(opInNew.toFixed());
    summaOutNew.innerHTML = `${resultFixNew}%`;
  } else if (sochInNew > 0) {
    disableSoch();
    setHiddenState(getElementById<HTMLElement>('op-one'), false);
    setHiddenState(getElementById<HTMLElement>('op-two'), true);
    toggleInputsDisabled(SUM_FIELD_IDS, false);

    resultFixNew = Number(sochInNew.toFixed());
    summaOutNew.innerHTML = `${resultFixNew}%`;
  } else {
    setHiddenState(getElementById<HTMLElement>('op-one'), false);
    setHiddenState(getElementById<HTMLElement>('soch-one'), false);
    setHiddenState(getElementById<HTMLElement>('op-two'), true);
    setHiddenState(getElementById<HTMLElement>('soch-two'), true);
    toggleInputsDisabled(SUM_FIELD_IDS, false);
    toggleInputsDisabled(SOCH_FIELD_IDS, false);

    resultFixNew = 0;
    summaOutNew.innerHTML = `${resultFixNew}%`;
  }

  if (resultFixNew < 0) {
    setElementText('output-text-new', 'Где-то ошибка ...');
    setBackground('output-text-new', COLOR_ERROR);
    setThemeColor(COLOR_ERROR);
  } else if (resultFixNew >= 0 && resultFixNew < 40) {
    setElementText('output-text-new', 'Оценка за четверть: 2');
    setBackground('output-text-new', COLOR_ERROR);
    setThemeColor(COLOR_ERROR);
  } else if (resultFixNew >= 40 && resultFixNew < 65) {
    setElementText('output-text-new', 'Оценка за четверть: 3');
    setBackground('output-text-new', COLOR_WARNING);
    setThemeColor(COLOR_WARNING);
  } else if (resultFixNew >= 65 && resultFixNew < 85) {
    setElementText('output-text-new', 'Оценка за четверть: 4');
    setBackground('output-text-new', COLOR_SUCCESS);
    setThemeColor(COLOR_SUCCESS);
  } else if (resultFixNew >= 85 && resultFixNew <= 100) {
    setElementText('output-text-new', 'Оценка за четверть: 5');
    setBackground('output-text-new', COLOR_SUCCESS);
    setThemeColor(COLOR_SUCCESS);
  } else {
    setElementText('output-text-new', 'Где-то ошибка ...');
    setBackground('output-text-new', COLOR_ERROR);
    setThemeColor(COLOR_ERROR);
  }

  CheckIsEmpty();
  checkSors(sor1, sor2, 'sor_1');
  checkSors(sor3, sor4, 'sor_2');
  checkSors(sor5, sor6, 'sor_3');
  checkSors(sor7, sor8, 'sor_4');
  checkSors(soch1New, soch2New, 'soch-new');
}

function checkSors(sor1: number, sor2: number, id: string): void {
  const element = getElementById<HTMLElement>(id);
  const ratio = sor2 === 0 ? NaN : (sor1 / sor2) * 100;

  if (!Number.isFinite(ratio) || Number.isNaN(ratio)) {
    element.style.backgroundColor = COLOR_SUCCESS;
    return;
  }

  if (ratio < 0) {
    element.style.backgroundColor = COLOR_ERROR;
  } else if (ratio >= 0 && ratio < 40) {
    element.style.backgroundColor = COLOR_ERROR;
  } else if (ratio >= 40 && ratio < 65) {
    element.style.backgroundColor = COLOR_WARNING;
  } else if (ratio >= 65 && ratio < 85) {
    element.style.backgroundColor = COLOR_SUCCESS;
  } else if (ratio >= 85 && ratio <= 100) {
    element.style.backgroundColor = COLOR_SUCCESS;
  } else {
    element.style.backgroundColor = COLOR_SUCCESS;
  }
}

export {
  CheckIsEmpty,
  CallOneSO,
  OneSO,
  OneFO,
  CallOneFO,
  enableSum,
  disableSum,
  enableSoch,
  disableSoch,
  FOPlan,
  checkSors
};

declare global {
  interface Window {
    CheckIsEmpty: typeof CheckIsEmpty;
    CallOneSO: typeof CallOneSO;
    OneSO: typeof OneSO;
    OneFO: typeof OneFO;
    CallOneFO: typeof CallOneFO;
    enableSum: typeof enableSum;
    disableSum: typeof disableSum;
    enableSoch: typeof enableSoch;
    disableSoch: typeof disableSoch;
    FOPlan: typeof FOPlan;
    checkSors: typeof checkSors;
  }
}

if (typeof window !== 'undefined') {
  window.CheckIsEmpty = CheckIsEmpty;
  window.CallOneSO = CallOneSO;
  window.OneSO = OneSO;
  window.OneFO = OneFO;
  window.CallOneFO = CallOneFO;
  window.enableSum = enableSum;
  window.disableSum = disableSum;
  window.enableSoch = enableSoch;
  window.disableSoch = disableSoch;
  window.FOPlan = FOPlan;
  window.checkSors = checkSors;
}
