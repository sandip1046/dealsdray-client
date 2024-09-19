import styles from './styles.module.css'


const Landing = () => {
  return (
    <>
  
    <div className={"flex flex-col lg:flex-row items-center justify-between"}>
      <img src='hero-image.png' alt="logo"className={"w-5/12 h-5/12 "}></img>
      <div className={"flex flex-col items-center justify-center gap-5"}>
        <h1 className={`${styles.gradient} !font-bold !text-xl lg:!text-4xl tracking-wider !p-3`} >Welcome to Employee Management System</h1>
        <p className={"text-center text-orange-500 text-lg font-semibold "}>This is a simple Employee Management System</p>
        <h4 className={"font-medium text-yellow-500 text-lg text-center "}>"Take care of your employees, and they'll take care of your business. It's as simple as that."<span> — Richard Branson</span></h4>
        
      </div>
    </div>

    </>
  )
}

export default Landing