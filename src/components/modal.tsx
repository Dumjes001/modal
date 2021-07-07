import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from '@material-ui/icons/Close';
// import '@fontsource/roboto';

//in-line styling for the page
//const theme = createMuiTheme();
const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflowX: "hidden",
    overflowY: "auto",
    position: "fixed",
    inset: 0,
    zIndex: 999,
    outline: "none",
  },
  main :{
	  position: 'relative',
	  width: 'auto',
	  margin:'auto',
  },
  body:{
	  border:0,
	  position: 'relative',
	  display: 'flex',
	  flexDirection: 'column',
	  width: '100%',
	  outline:'none'
  },
  header: {
    display: "flex",
    alignItems: "start",
    justifyItems: "space-between",
    padding: "5px",
    borderRadius: "10px",
  },
  title: {
    float: "left",
    text: "19px",
  },
  button: {
    float: "right",
	height: '20PX',
	width: '20px',
  },
  close: {
	  color:'white',
	//   height:'6px',
	// width: '6px',
	outline: 'none',
  },
  children: {
	  padding:'px',
	  position: 'relative',
	  flex: 'auto',
  },
  textColors: {
    color: "white",
  },
});

//functional Modal Component
function Modal({ ...props }) {
  const classes = useStyles();
  var isOpen = props.open
  function onClose(){
	  isOpen = false
  }
  return (
    <>
      {isOpen ? (
        <div>
          <div className={classes.root}>
            <div className={classes.main}>
              <div className={classes.body}>
                <div className={classes.header}>
                  <h3 className={classes.title}>{props.title}</h3>
                  <button
                    type="button"
                    className={classes.button}
                    onClick={onClose}
                  >
                    <span className={classes.close}>
                      <CloseIcon />
                    </span>
                  </button>
                </div>

                <div className={classes.children}>
                  <div>{props.children}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;
