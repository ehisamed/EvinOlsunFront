import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import './modalv2.scss'

type Props = {
  title: string,
  topPreffix: ReactNode | string,
  topPreffixAction: () => void,
  topSuffix: ReactNode | string,
  topSuffixAction?: () => void,
  children: ReactNode,
  bottomBtn?: boolean
  bottomBtnAction?: () => void,
  isOpen: boolean,
  offersCount: string,
}

const ModalV2: React.FC<Props> = ({
  title,
  topSuffix,
  topSuffixAction,
  topPreffix,
  topPreffixAction,
  children,
  bottomBtn,
  bottomBtnAction,
  isOpen = false,
  offersCount
}) => {
  if (!isOpen) return null
  return ReactDOM.createPortal(
    <div className='modal'>
      <div className="modalV2-content">
        <div className="modal-top">
          {topPreffix && (
            <div className="modal-top--preffix">
              <button className='modal-top--preffix-btn modal-top--btn' onClick={topPreffixAction}>
                {topPreffix}
              </button>
            </div>
          )}

          {title && (
            <div className="modal-top--title">
              {title}
            </div>
          )}

          {topSuffix && (
            <div className="modal-top--suffix">
              <button className='modal-top--suffix-btn modal-top--btn' onClick={topSuffixAction}>
                {topSuffix}
              </button>
            </div>
          )}

        </div>
        <div className="modal-content-inner">
          {children}
        </div>
        {bottomBtn && (
          <div className="modal-bottom">
            <button className='modal-bottom--action modal-bottom--btn' onClick={bottomBtnAction}>
              Показать {offersCount} предложений
            </button>
          </div>
        )}
      </div>
      <div className='modal-overlay' onClick={topPreffixAction}></div>
    </div>,
    document.body)
}

export default ModalV2