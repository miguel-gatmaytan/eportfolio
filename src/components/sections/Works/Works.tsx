import * as React from "react";
import Button from "components/Button";
import { SubHeader } from "components/headers";
import { useParams, useNavigate, useLocation } from "react-router";
import Excel from "./projects/Excel";
import Chromatic from "./projects/Chromatic";

const WORK_SUBPATHS = {
  EXCEL: "excel",
  CHROMATIC: "chromatic",
};

export const Works = (props: { hideBackButton?: boolean }) => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () =>
    navigate(
      `${location.pathname.substring(0, location.pathname.lastIndexOf("/"))}`
    );

  const listenForEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      goBack();
    }
  };

  React.useEffect(() => {
    document.addEventListener("keyup", listenForEsc);

    return () => {
      document.removeEventListener("keyup", listenForEsc);
    };
  }, []);
  const getWorkTitle = () => {
    switch (params.work) {
      case WORK_SUBPATHS.EXCEL:
        return "Excel Plug-in Project";
      case WORK_SUBPATHS.CHROMATIC:
        return "Chromatic Project";
      default:
        return "Recent Projects";
    }
  };

  const getActiveWorkSection = () => {
    switch (params.work) {
      case WORK_SUBPATHS.EXCEL:
        return <Excel />;
      case WORK_SUBPATHS.CHROMATIC:
        return <Chromatic />;
      default:
        return "Recent Projects";
    }
  };

  return (
    <div style={{ color: "#f6f6f6", textAlign: "center" }}>
      <SubHeader style={{ marginTop: 50 }}>{getWorkTitle()}</SubHeader>

      <div>
        {!params.work && (
          <>
            <div style={{ marginTop: 25 }}>
              <Button
                onClick={() =>
                  navigate(`${location.pathname}/${WORK_SUBPATHS.EXCEL}`)
                }
              >
                Excel Plug-in
              </Button>
            </div>
            <div style={{ marginTop: 25 }}>
              <Button
                onClick={() =>
                  navigate(`${location.pathname}/${WORK_SUBPATHS.CHROMATIC}`)
                }
              >
                Chromatic
              </Button>
            </div>
          </>
        )}

        {params.work && getActiveWorkSection()}

        {params.work && !props.hideBackButton && (
          <Button onClick={goBack}>CLICK TO GO BACK</Button>
        )}
      </div>
    </div>
  );
};

export default Works;
