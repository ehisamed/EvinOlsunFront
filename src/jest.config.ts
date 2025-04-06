export {};

module.exports = {
    roots: ['<rootDir>/src'], // Укажите корневую директорию для поиска тестов
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Преобразование файлов с помощью babel
    },
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'], // Шаблон для поиска тестов
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'], // Поддерживаемые расширения файлов
    testPathIgnorePatterns: ['/node_modules/', '/public/'], // Игнорируемые пути
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], // Путь к файлу настройки
    collectCoverage: true, // Включить сбор данных о покрытии
    coverageDirectory: 'coverage', // Директория для хранения отчетов о покрытии
    coverageReporters: ['text', 'lcov'], // Форматы отчетов о покрытии
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json', // Путь к файлу конфигурации TypeScript
      },
    },
    moduleNameMapper: {
      '\\.(css|less|scss)$': 'identity-obj-proxy', // Мокаем стили
    },
    setupFiles: ['<rootDir>/src/setupTests.js'], // Файл для настройки окружения
    // Дополнительные настройки
    verbose: true, // Выводить подробную информацию о тестах
    bail: 1, // Остановить тесты при первой ошибке
  };