import Editor from '@monaco-editor/react';
import React, { useState } from 'react';
import Select from 'react-select';
export const CodeEditorWindow = ({ onChange, language, code, theme }) => {
  const [value, setValue] = useState(code || '');

  const handleEditorChange = (value) => {
    setValue(value);
    onChange('code', value);
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="85vh"
        width={`100%`}
        language={language || 'javascript'}
        value={value}
        theme={theme}
        defaultValue="// some comment"
        onChange={handleEditorChange}
      />
    </div>
  );
};
export const customStyles = {
  control: (styles) => ({
    ...styles,
    width: '100%',
    maxWidth: '14rem',
    minWidth: '12rem',
    borderRadius: '5px',
    color: '#000',
    fontSize: '0.8rem',
    lineHeight: '1.75rem',
    backgroundColor: '#FFFFFF',
    cursor: 'pointer',
    border: '2px solid #000000',
    boxShadow: '5px 5px 0px 0px rgba(0,0,0);',
    ':hover': {
      border: '2px solid #000000',
      boxShadow: 'none',
    },
  }),
  option: (styles) => {
    return {
      ...styles,
      color: '#000',
      fontSize: '0.8rem',
      lineHeight: '1.75rem',
      width: '100%',
      background: '#fff',
      ':hover': {
        backgroundColor: 'rgb(243 244 246)',
        color: '#000',
        cursor: 'pointer',
      },
    };
  },
  menu: (styles) => {
    return {
      ...styles,
      backgroundColor: '#fff',
      maxWidth: '14rem',
      border: '2px solid #000000',
      borderRadius: '5px',
      boxShadow: '5px 5px 0px 0px rgba(0,0,0);',
    };
  },

  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: '#000',
      fontSize: '0.8rem',
      lineHeight: '1.75rem',
    };
  },
};
const OutputWindow = ({ outputDetails }) => {
  const getOutput = () => {
    let statusId = outputDetails?.status?.id;

    if (statusId === 6) {
      // compilation error
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {atob(outputDetails?.compile_output)}
        </pre>
      );
    } else if (statusId === 3) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-green-500">
          {atob(outputDetails.stdout) !== null
            ? `${atob(outputDetails.stdout)}`
            : null}
        </pre>
      );
    } else if (statusId === 5) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {`Time Limit Exceeded`}
        </pre>
      );
    } else {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {atob(outputDetails?.stderr)}
        </pre>
      );
    }
  };
  return (
    <>
      <h1 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-2">
        Output
      </h1>
      <div className="w-full h-56 bg-[#1e293b] rounded-md text-white font-normal text-sm overflow-y-auto">
        {outputDetails ? <>{getOutput()}</> : null}
      </div>
    </>
  );
};
const CustomInput = ({ customInput, setCustomInput }) => {
  return (
    <>
      {' '}
      <textarea
        rows="5"
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder={`Custom input`}
        className={classnames(
          'focus:outline-none w-full border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white mt-2'
        )}
      ></textarea>
    </>
  );
};
export const languageOptions = [
  {
    id: 63,
    name: 'JavaScript (Node.js 12.14.0)',
    label: 'JavaScript (Node.js 12.14.0)',
    value: 'javascript',
  },
  {
    id: 45,
    name: 'Assembly (NASM 2.14.02)',
    label: 'Assembly (NASM 2.14.02)',
    value: 'assembly',
  },
  {
    id: 46,
    name: 'Bash (5.0.0)',
    label: 'Bash (5.0.0)',
    value: 'bash',
  },
  {
    id: 47,
    name: 'Basic (FBC 1.07.1)',
    label: 'Basic (FBC 1.07.1)',
    value: 'basic',
  },
  {
    id: 75,
    name: 'C (Clang 7.0.1)',
    label: 'C (Clang 7.0.1)',
    value: 'c',
  },
  {
    id: 76,
    name: 'C++ (Clang 7.0.1)',
    label: 'C++ (Clang 7.0.1)',
    value: 'cpp',
  },
  {
    id: 48,
    name: 'C (GCC 7.4.0)',
    label: 'C (GCC 7.4.0)',
    value: 'c',
  },
  {
    id: 52,
    name: 'C++ (GCC 7.4.0)',
    label: 'C++ (GCC 7.4.0)',
    value: 'cpp',
  },
  {
    id: 49,
    name: 'C (GCC 8.3.0)',
    label: 'C (GCC 8.3.0)',
    value: 'c',
  },
  {
    id: 53,
    name: 'C++ (GCC 8.3.0)',
    label: 'C++ (GCC 8.3.0)',
    value: 'cpp',
  },
  {
    id: 50,
    name: 'C (GCC 9.2.0)',
    label: 'C (GCC 9.2.0)',
    value: 'c',
  },
  {
    id: 54,
    name: 'C++ (GCC 9.2.0)',
    label: 'C++ (GCC 9.2.0)',
    value: 'cpp',
  },
  {
    id: 86,
    name: 'Clojure (1.10.1)',
    label: 'Clojure (1.10.1)',
    value: 'clojure',
  },
  {
    id: 51,
    name: 'C# (Mono 6.6.0.161)',
    label: 'C# (Mono 6.6.0.161)',
    value: 'csharp',
  },
  {
    id: 77,
    name: 'COBOL (GnuCOBOL 2.2)',
    label: 'COBOL (GnuCOBOL 2.2)',
    value: 'cobol',
  },
  {
    id: 55,
    name: 'Common Lisp (SBCL 2.0.0)',
    label: 'Common Lisp (SBCL 2.0.0)',
    value: 'lisp',
  },
  {
    id: 56,
    name: 'D (DMD 2.089.1)',
    label: 'D (DMD 2.089.1)',
    value: 'd',
  },
  {
    id: 57,
    name: 'Elixir (1.9.4)',
    label: 'Elixir (1.9.4)',
    value: 'elixir',
  },
  {
    id: 58,
    name: 'Erlang (OTP 22.2)',
    label: 'Erlang (OTP 22.2)',
    value: 'erlang',
  },
  {
    id: 44,
    label: 'Executable',
    name: 'Executable',
    value: 'exe',
  },
  {
    id: 87,
    name: 'F# (.NET Core SDK 3.1.202)',
    label: 'F# (.NET Core SDK 3.1.202)',
    value: 'fsharp',
  },
  {
    id: 59,
    name: 'Fortran (GFortran 9.2.0)',
    label: 'Fortran (GFortran 9.2.0)',
    value: 'fortran',
  },
  {
    id: 60,
    name: 'Go (1.13.5)',
    label: 'Go (1.13.5)',
    value: 'go',
  },
  {
    id: 88,
    name: 'Groovy (3.0.3)',
    label: 'Groovy (3.0.3)',
    value: 'groovy',
  },
  {
    id: 61,
    name: 'Haskell (GHC 8.8.1)',
    label: 'Haskell (GHC 8.8.1)',
    value: 'haskell',
  },
  {
    id: 62,
    name: 'Java (OpenJDK 13.0.1)',
    label: 'Java (OpenJDK 13.0.1)',
    value: 'java',
  },

  {
    id: 78,
    name: 'Kotlin (1.3.70)',
    label: 'Kotlin (1.3.70)',
    value: 'kotlin',
  },
  {
    id: 64,
    name: 'Lua (5.3.5)',
    label: 'Lua (5.3.5)',
    value: 'lua',
  },

  {
    id: 79,
    name: 'Objective-C (Clang 7.0.1)',
    label: 'Objective-C (Clang 7.0.1)',
    value: 'objectivec',
  },
  {
    id: 65,
    name: 'OCaml (4.09.0)',
    label: 'OCaml (4.09.0)',
    value: 'ocaml',
  },
  {
    id: 66,
    name: 'Octave (5.1.0)',
    label: 'Octave (5.1.0)',
    value: 'octave',
  },
  {
    id: 67,
    name: 'Pascal (FPC 3.0.4)',
    label: 'Pascal (FPC 3.0.4)',
    value: 'pascal',
  },
  {
    id: 85,
    name: 'Perl (5.28.1)',
    label: 'Perl (5.28.1)',
    value: 'perl',
  },
  {
    id: 68,
    name: 'PHP (7.4.1)',
    label: 'PHP (7.4.1)',
    value: 'php',
  },
  {
    id: 43,
    label: 'Plain Text',
    name: 'Plain Text',
    value: 'text',
  },
  {
    id: 69,
    name: 'Prolog (GNU Prolog 1.4.5)',
    label: 'Prolog (GNU Prolog 1.4.5)',
    value: 'prolog',
  },
  {
    id: 70,
    name: 'Python (2.7.17)',
    label: 'Python (2.7.17)',
    value: 'python',
  },
  {
    id: 71,
    name: 'Python (3.8.1)',
    label: 'Python (3.8.1)',
    value: 'python',
  },
  {
    id: 80,
    name: 'R (4.0.0)',
    label: 'R (4.0.0)',
    value: 'r',
  },
  {
    id: 72,
    name: 'Ruby (2.7.0)',
    label: 'Ruby (2.7.0)',
    value: 'ruby',
  },
  {
    id: 73,
    name: 'Rust (1.40.0)',
    label: 'Rust (1.40.0)',
    value: 'rust',
  },
  {
    id: 81,
    name: 'Scala (2.13.2)',
    label: 'Scala (2.13.2)',
    value: 'scala',
  },
  {
    id: 82,
    name: 'SQL (SQLite 3.27.2)',
    label: 'SQL (SQLite 3.27.2)',
    value: 'sql',
  },
  {
    id: 83,
    name: 'Swift (5.2.3)',
    label: 'Swift (5.2.3)',
    value: 'swift',
  },
  {
    id: 74,
    name: 'TypeScript (3.7.4)',
    label: 'TypeScript (3.7.4)',
    value: 'typescript',
  },
  {
    id: 84,
    name: 'Visual Basic.Net (vbnc 0.0.0.5943)',
    label: 'Visual Basic.Net (vbnc 0.0.0.5943)',
    value: 'vbnet',
  },
];
export const classnames = (...args) => {
  return args.join(' ');
};

export default function Myeditor() {
  const [code, setCode] = useState(null);
  const [customInput, setCustomInput] = useState('');
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [theme, setTheme] = useState('cobalt');
  const [language, setLanguage] = useState(languageOptions[0]);
  const javascriptDefault = `// some comment`;
  const handleCompile = () => {
    // We will come to the implementation later in the code
  };
  const onSelectChange = (sl) => {
    console.log('selected Option...', sl);
    setLanguage(sl);
  };
  const LanguagesDropdown = ({ onSelectChange }) => {
    return (
      <Select
        placeholder={`Filter By Category`}
        options={languageOptions}
        styles={customStyles}
        defaultValue={languageOptions[0]}
        onChange={(selectedOption) => onSelectChange(selectedOption)}
      />
    );
  };

  const useKeyPress = function (targetKey) {
    const [keyPressed, setKeyPressed] = useState(false);

    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    }

    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    };

    React.useEffect(() => {
      document.addEventListener('keydown', downHandler);
      document.addEventListener('keyup', upHandler);

      return () => {
        document.removeEventListener('keydown', downHandler);
        document.removeEventListener('keyup', upHandler);
      };
    });

    return keyPressed;
  };
  const onChange = (action, data) => {
    switch (action) {
      case 'code': {
        setCode(data);
        break;
      }
      default: {
        console.warn('case not handled!', action, data);
      }
    }
  };
  const enterPress = useKeyPress('Enter');
  const ctrlPress = useKeyPress('Control');
  return (
    <div className="flex grid grid-cols-2">
      <div className="flex flex-col w-full h-full justify-start items-end">
        <div className="flex flex-row">
          <div className="px-4 py-2">
            <LanguagesDropdown onSelectChange={onSelectChange} />
          </div>
          <div className="px-4 py-2">
            {/* <ThemeDropdown
              handleThemeChange={handleThemeChange}
              theme={theme}
            /> */}
          </div>
        </div>
        <CodeEditorWindow
          code={code}
          onChange={onChange}
          language={language?.value}
          theme={theme.value}
        />
      </div>
      <div className="right-container flex flex-shrink-0 w-[30%] flex-col">
        <OutputWindow outputDetails={outputDetails} />
        <div className="flex flex-col items-end">
          <CustomInput
            customInput={customInput}
            setCustomInput={setCustomInput}
          />
          <button
            onClick={handleCompile}
            disabled={!code}
            className={classnames(
              'mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0',
              !code ? 'opacity-50' : ''
            )}
          >
            {processing ? 'Processing...' : 'Compile and Execute'}
          </button>
        </div>
        {outputDetails && <OutputDetails outputDetails={outputDetails} />}
      </div>
    </div>
  );
}
