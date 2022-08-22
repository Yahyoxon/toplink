import { useMemo, useState } from "react";
import { createContext } from "react";

const DEFAULT_STATE = {
  isChangeProfile: false,
  setIsChangeProfile: () => {},
};
const ChangeProfileContext = createContext(DEFAULT_STATE);
function ChangeProfile({ children }) {
  const [isChangeProfile, setIsChangeProfile] = useState(false);

  // const values = useMemo(
  //   () => ({
  //     isChangeProfile,
  //     setIsChangeProfile,
  //   }),
  //   [isChangeProfile]
  // );
  return (
    <ChangeProfileContext.Provider
      value={[isChangeProfile, setIsChangeProfile]}
    >
      {children}
    </ChangeProfileContext.Provider>
  );
}
export { ChangeProfile, ChangeProfileContext };
