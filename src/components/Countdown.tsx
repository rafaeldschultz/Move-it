import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/Countdown.module.css"

export function Countdown () {
    const { minutes, 
            seconds, 
            hasFinished, 
            isActive, 
            startCountdown, 
            resetCountdown 
        } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');     //padStart => adiciona um zero a esquerda, se necessario
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');     //padStart => adiciona um zero a esquerda, se necessario

    return (
        <div>
            <div className = { styles.countdownContainer }>
                <div>
                    <span>{ minuteLeft }</span>
                    <span>{ minuteRight }</span>
                </div>
                <span>:</span>
                <div>
                    <span>{ secondLeft }</span>
                    <span>{ secondRight }</span>
                </div>
            </div>
            {
                hasFinished ? (        //&& equivale a somente IF no operador ternario
                    <button 
                        disabled
                        className={styles.countdownButton}
                    >
                        Ciclo encerrado
                    </button>
                ) : (
                    <>
                        {
                            isActive ? (
                                <button 
                                    type="button" 
                                    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                                    onClick= { resetCountdown }
                                >
                                    Abandonar ciclo
                                </button>
                            ) : (
                                <button 
                                    type="button" 
                                    className={ styles.countdownButton }
                                    onClick= { startCountdown }
                                >
                                    Iniciar um ciclo
                                </button>
                            )
                        }
                    </>
                )
            }
            
            
            
        </div>
    );
}