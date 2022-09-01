import Backdrop from './Backdrop'

const ModelOverlay = ({ children, onClose }) => {
  return (
    <>
      <Backdrop onClose={onClose}/>
      <div className="fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-20 w-full max-w-xl px-6">
        {children}
      </div>
    </>
  )
}

export default ModelOverlay;