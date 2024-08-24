import React, { useState } from "react";

function Application() {
  const [blueTokens, setBlueTokens] = useState("");
  const [bluePrefix, setBluePrefix] = useState("");
  const [bluePerRow, setBluePerRow] = useState("");
  const [redTokens, setRedTokens] = useState("");
  const [redPrefix, setRedPrefix] = useState("");
  const [redPerRow, setRedPerRow] = useState("");
  const [generatedTokens, setGeneratedTokens] = useState([]);

  const handleGenerate = () => {
    const blueTokenList = [];
    const redTokenList = [];

    for (let i = 1; i <= blueTokens; i++) {
      blueTokenList.push(`${bluePrefix}${i}`);
    }

    for (let i = 1; i <= redTokens; i++) {
      redTokenList.push(`${redPrefix}${i}`);
    }

    setGeneratedTokens({
      blue: blueTokenList,
      red: redTokenList,
    });
  };

  const handleClear = () => {
    setBlueTokens("");
    setBluePrefix("");
    setBluePerRow("");
    setRedTokens("");
    setRedPrefix("");
    setRedPerRow("");
    setGeneratedTokens([]);
  };

  const renderTokens = (tokens, perRow, color) => {
    const rows = [];
    for (let i = 0; i < tokens.length; i += perRow) {
      const rowTokens = tokens.slice(i, i + perRow);
      rows.push(
        <div key={i} style={{ marginBottom: "10px" }}>
          {rowTokens.map((token, index) => (
            <span
              key={index}
              style={{
                display: "inline-block",
                margin: "5px",
                backgroundColor: color,
                padding: "10px",
                borderRadius: "5px",
                color: "#fff",
              }}
            >
              {token}
            </span>
          ))}
        </div>
      );
    }
    return rows;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "350px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Token Generator Application</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <label
            style={{ width: "180px", textAlign: "right", whiteSpace: "nowrap" }}
          >
            Number of Blue Tokens:
          </label>
          <input
            type="number"
            value={blueTokens}
            onChange={(e) => setBlueTokens(Number(e.target.value))}
            style={{ width: "150px" }}
          />
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <label
            style={{ width: "180px", textAlign: "right", whiteSpace: "nowrap" }}
          >
            Blue Token Prefix:
          </label>
          <input
            type="text"
            value={bluePrefix}
            onChange={(e) => setBluePrefix(e.target.value)}
            style={{ width: "150px" }}
          />
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <label
            style={{ width: "180px", textAlign: "right", whiteSpace: "nowrap" }}
          >
            Blue Tokens Per Row:
          </label>
          <input
            type="number"
            value={bluePerRow}
            onChange={(e) => setBluePerRow(Number(e.target.value))}
            style={{ width: "150px" }}
          />
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <label
            style={{ width: "180px", textAlign: "right", whiteSpace: "nowrap" }}
          >
            Number of Red Tokens:
          </label>
          <input
            type="number"
            value={redTokens}
            onChange={(e) => setRedTokens(Number(e.target.value))}
            style={{ width: "150px" }}
          />
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <label
            style={{ width: "180px", textAlign: "right", whiteSpace: "nowrap" }}
          >
            Red Token Prefix:
          </label>
          <input
            type="text"
            value={redPrefix}
            onChange={(e) => setRedPrefix(e.target.value)}
            style={{ width: "150px" }}
          />
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <label
            style={{ width: "180px", textAlign: "right", whiteSpace: "nowrap" }}
          >
            Red Tokens Per Row:
          </label>
          <input
            type="number"
            value={redPerRow}
            onChange={(e) => setRedPerRow(Number(e.target.value))}
            style={{ width: "150px" }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button onClick={handleGenerate}>Generate</button>
          <button onClick={handleClear}>Clear</button>
        </div>
        <div style={{ marginTop: "20px" }}>
          {generatedTokens.blue &&
            renderTokens(generatedTokens.blue, bluePerRow, "blue")}
          {generatedTokens.red &&
            renderTokens(generatedTokens.red, redPerRow, "red")}
        </div>
      </div>
    </div>
  );
}

export default Application;
