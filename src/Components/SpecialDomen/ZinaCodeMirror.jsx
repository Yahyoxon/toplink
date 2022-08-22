import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import CodeMirror from "react-codemirror";

import "codemirror/mode/sql/sql";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/sql-hint";
import "codemirror/lib/codemirror.css";
import "codemirror/addon/hint/show-hint.css";
  
const ZinaCodeMirror=({ value, onChange, name }) =>{
  const codemirrorRef = useRef();
 

  const autoComplete = codemirror => {
    const codeMirror = codemirrorRef.current.getCodeMirrorInstance();
    const hintOptions = {
      tables: {
        table_name: ["column1", "column2", "column3", "etc"],
        another_table: ["columnA", "columnB"]
      },
      disableKeywords: false,
      completeSingle: false,
      completeOnSingleClick: false
    };
    codeMirror.showHint(codemirror, codeMirror.hint.sql, hintOptions);
  };

 

  useEffect(() => {
    codemirrorRef.current.getCodeMirror().setValue(value);
    codemirrorRef.current.getCodeMirror().on("inputRead", cm => {
      autoComplete(cm);
    });
  }, []);

  return (
    <div>
      <CodeMirror
        className="zina-code-mirror"
        ref={codemirrorRef}
        value={value}
        onChange={onChange}
        name={name}
        options={{
          lineNumbers: true,
          mode: { name: "text/x-pgsql", globalVars: true },
          tabSize: 2,
          readOnly: false,
          smartIndent: true,
          matchBrackets: true,
          extraKeys: {
            "Ctrl-Space": autoComplete
          }
        }}
      />
    </div>
  );
}

export default ZinaCodeMirror;