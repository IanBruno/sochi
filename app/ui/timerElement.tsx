
export default function TimerElement ({time, text}) {

    return (
        <>
            <div style={{
                    border: '2px solid white',
                    height: '50px',
                    borderRadius: '50%',
                    width: '50px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '1rem',
                }}>
                    <div className="text-xl text-white font-semibold">{time}</div>
                    <div className="text-xs text-white font-semibold">{text}</div>
            </div>
        </>
    );
};
