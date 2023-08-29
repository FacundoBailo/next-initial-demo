import { FC, PropsWithChildren } from "react"

export const DarkLayout: FC <PropsWithChildren> = ({ children }) => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#444',
        padding: '10px',
        borderRadius: '5px',
        textAlign: 'center',
    }}>
        <h3>Dark-Layout</h3>
        <div>
            { children }
        </div>

    </div>
  )
}