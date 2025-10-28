import React, { useState } from 'react';

// TypeScript интерфейсы
interface CalculatorState {
  firstNumber: number;
  secondNumber: number;
  result: number | string;
  operation: MathOperation;
}

type MathOperation = 'add' | 'subtract' | 'multiply' | 'divide';

interface MathOperations {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
  multiply: (a: number, b: number) => number;
  divide: (a: number, b: number) => number;
}

// TypeScript функции математических операций
const mathOperations: MathOperations = {
  add: (a: number, b: number): number => {
    return a + b;
  },
  
  subtract: (a: number, b: number): number => {
    return a - b;
  },
  
  multiply: (a: number, b: number): number => {
    return a * b;
  },
  
  divide: (a: number, b: number): number => {
    if (b === 0) {
      throw new Error('Деление на ноль невозможно');
    }
    return a / b;
  }
};

// Функция для выполнения операций
const performOperation = (operation: MathOperation, a: number, b: number): number | string => {
  try {
    switch (operation) {
      case 'add':
        return mathOperations.add(a, b);
      case 'subtract':
        return mathOperations.subtract(a, b);
      case 'multiply':
        return mathOperations.multiply(a, b);
      case 'divide':
        return mathOperations.divide(a, b);
      default:
        return 'Неизвестная операция';
    }
  } catch (error) {
    return error instanceof Error ? error.message : 'Произошла ошибка';
  }
};

const Calculator: React.FC = () => {
  const [state, setState] = useState<CalculatorState>({
    firstNumber: 0,
    secondNumber: 0,
    result: 0,
    operation: 'add'
  });

  const handleNumberChange = (field: 'firstNumber' | 'secondNumber', value: string): void => {
    const numValue: number = parseFloat(value) || 0;
    setState(prev => ({
      ...prev,
      [field]: numValue
    }));
  };

  const handleOperationChange = (operation: MathOperation): void => {
    setState(prev => ({
      ...prev,
      operation
    }));
  };

  const calculate = (): void => {
    const result = performOperation(state.operation, state.firstNumber, state.secondNumber);
    setState(prev => ({
      ...prev,
      result
    }));
  };

  const reset = (): void => {
    setState({
      firstNumber: 0,
      secondNumber: 0,
      result: 0,
      operation: 'add'
    });
  };

  const getOperationSymbol = (operation: MathOperation): string => {
    switch (operation) {
      case 'add': return '+';
      case 'subtract': return '-';
      case 'multiply': return '×';
      case 'divide': return '÷';
      default: return '+';
    }
  };

  return (
    <main className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-5">
              <h1 className="display-5 fw-bold text-primary mb-3">
                <i className="bi bi-calculator me-3 text-danger"></i>
                TypeScript Калькулятор
              </h1>
              <p className="lead text-muted">
                Математические операции с использованием TypeScript
              </p>
            </div>

            <div className="card shadow-lg border-0">
              <div className="card-body p-5">
                <div className="row g-4">
                  {/* Первое число */}
                  <div className="col-md-6">
                    <label htmlFor="firstNumber" className="form-label fw-semibold">
                      Первое число
                    </label>
                    <input
                      type="number"
                      id="firstNumber"
                      className="form-control form-control-lg"
                      value={state.firstNumber}
                      onChange={(e) => handleNumberChange('firstNumber', e.target.value)}
                      placeholder="Введите первое число"
                    />
                  </div>

                  {/* Второе число */}
                  <div className="col-md-6">
                    <label htmlFor="secondNumber" className="form-label fw-semibold">
                      Второе число
                    </label>
                    <input
                      type="number"
                      id="secondNumber"
                      className="form-control form-control-lg"
                      value={state.secondNumber}
                      onChange={(e) => handleNumberChange('secondNumber', e.target.value)}
                      placeholder="Введите второе число"
                    />
                  </div>

                  {/* Операции */}
                  <div className="col-12">
                    <label className="form-label fw-semibold">Выберите операцию</label>
                    <div className="row g-2">
                      <div className="col-md-3">
                        <button
                          className={`btn w-100 ${state.operation === 'add' ? 'btn-primary' : 'btn-outline-primary'}`}
                          onClick={() => handleOperationChange('add')}
                        >
                          <i className="bi bi-plus-circle me-2"></i>
                          Сложение (+)
                        </button>
                      </div>
                      <div className="col-md-3">
                        <button
                          className={`btn w-100 ${state.operation === 'subtract' ? 'btn-primary' : 'btn-outline-primary'}`}
                          onClick={() => handleOperationChange('subtract')}
                        >
                          <i className="bi bi-dash-circle me-2"></i>
                          Вычитание (-)
                        </button>
                      </div>
                      <div className="col-md-3">
                        <button
                          className={`btn w-100 ${state.operation === 'multiply' ? 'btn-primary' : 'btn-outline-primary'}`}
                          onClick={() => handleOperationChange('multiply')}
                        >
                          <i className="bi bi-x-circle me-2"></i>
                          Умножение (×)
                        </button>
                      </div>
                      <div className="col-md-3">
                        <button
                          className={`btn w-100 ${state.operation === 'divide' ? 'btn-primary' : 'btn-outline-primary'}`}
                          onClick={() => handleOperationChange('divide')}
                        >
                          <i className="bi bi-slash-circle me-2"></i>
                          Деление (÷)
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Результат */}
                  <div className="col-12">
                    <div className="bg-light rounded-3 p-4 text-center">
                      <h5 className="text-muted mb-3">Результат</h5>
                      <div className="fs-1 fw-bold text-primary">
                        {state.firstNumber} {getOperationSymbol(state.operation)} {state.secondNumber} = {state.result}
                      </div>
                    </div>
                  </div>

                  {/* Кнопки */}
                  <div className="col-12">
                    <div className="d-grid gap-3 d-md-flex justify-content-md-center">
                      <button
                        className="btn btn-success btn-lg px-5"
                        onClick={calculate}
                      >
                        <i className="bi bi-equals me-2"></i>
                        Вычислить
                      </button>
                      <button
                        className="btn btn-outline-secondary btn-lg px-4"
                        onClick={reset}
                      >
                        <i className="bi bi-arrow-clockwise me-2"></i>
                        Сбросить
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Информация о TypeScript */}
            <div className="row g-4 mt-4">
              <div className="col-md-6">
                <div className="card border-0 bg-primary bg-opacity-10">
                  <div className="card-body text-center p-4">
                    <i className="bi bi-code-slash text-primary fs-1 mb-3"></i>
                    <h5 className="fw-bold">TypeScript</h5>
                    <p className="text-muted mb-0">Строгая типизация для надежного кода</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-0 bg-success bg-opacity-10">
                  <div className="card-body text-center p-4">
                    <i className="bi bi-calculator text-success fs-1 mb-3"></i>
                    <h5 className="fw-bold">Функции</h5>
                    <p className="text-muted mb-0">Сложение, вычитание, умножение, деление</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Calculator;