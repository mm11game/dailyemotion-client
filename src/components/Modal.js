import React, {
    forwardRef,
    useImperativeHandle,
    useRef,
    useState
  } from "react";
  import "../css/Modal.css";
  import { motion, AnimatePresence } from "framer-motion";
  
  export default function App() {
    const modalRef = useRef();
  
    return (
      <div className="App">
        {/* <button onClick={() => modalRef.current.open()}>Open Modal</button> */}
        <Modal ref={modalRef}>
          <h1>새로고침 또는 첫 화면 랜딩시 자동으로 모달창이 뜨고 배경을 클릭하면 사라집니다.</h1>
        </Modal>
      </div>
    );
  }
  
  const Modal = forwardRef((props, ref) => {
    const [open, setOpen] = useState(true);
  
    useImperativeHandle(ref, () => {
      return {
        open: () => setOpen(true),
        close: () => setOpen(false)
      };
    });
  
    return (
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              }}
              exit={{
                opacity: 0,
                transition: {
                  delay: 0.3
                }
              }}
              onClick={() => setOpen(false)}
              className="modal-backdrop"
            />
            <motion.div
              initial={{
                scale: 0
              }}
              animate={{
                scale: 1,
                transition: {
                  duration: 0.3
                }
              }}
              exit={{
                scale: 0,
                transition: {
                  delay: 0.3
                }
              }}
              className="modal-content-wrapper"
            >
              <motion.div
                className="modal-content"
                initial={{
                  x: 100,
                  opacity: 0
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    duration: 0.3
                  }
                }}
                exit={{
                  x: 100,
                  opacity: 0,
                  transition: {
                    duration: 0.3
                  }
                }}
              >
                {props.children}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  });
  