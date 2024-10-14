export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'add' : IDL.Func([IDL.Float64, IDL.Float64], [IDL.Float64], []),
    'clearHistory' : IDL.Func([], [], []),
    'divide' : IDL.Func([IDL.Float64, IDL.Float64], [IDL.Opt(IDL.Float64)], []),
    'getHistory' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Float64, IDL.Float64, IDL.Text, IDL.Float64))],
        ['query'],
      ),
    'multiply' : IDL.Func([IDL.Float64, IDL.Float64], [IDL.Float64], []),
    'subtract' : IDL.Func([IDL.Float64, IDL.Float64], [IDL.Float64], []),
  });
};
export const init = ({ IDL }) => { return []; };
