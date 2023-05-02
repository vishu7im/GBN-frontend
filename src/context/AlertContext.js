import React, { createContext, useContext, useEffect } from "react";
import Alert from "@mui/material/Alert";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = React.useState(null);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert(null);
  };
  useEffect(() => {
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }, [alert]);

  return (
    <AlertContext.Provider value={{ setAlert }}>
      {alert && (
        <div className="alert_box">
          <div className="alert">
            <Alert severity={alert.type} onClose={handleClose}>
              {alert.message}
            </Alert>
          </div>
        </div>
      )}
      {children}
    </AlertContext.Provider>
  );
};

export const AlertApi = () => {
  return useContext(AlertContext);
};
