
import TypeItem from "./typeItem"

const TypeAccording = () => { 
    return (
        <div className="flex flex-col overflow-auto">
            <h1 className='font-semibold text-sm'>Filter Search</h1>
            <div className="">
                <h2>Fitness</h2>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 items-center space-x-2">
                        <TypeItem id="Running" label="Running" />
                        <TypeItem id="Yoga" label="Yoga" />
                        <TypeItem id="Weightlifting" label="Weightlifting" />
                    </div>
            </div>
            <div>
                <h2>Health</h2>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center space-x-2">
                        <TypeItem id="MentalHealth" label="Mental Health" />
                        <TypeItem id="Nutrition" label="Nutrition" />
                        <TypeItem id="Sleep" label="Sleep" />
                    </div>
            </div>
        </div>
    )
}

export default TypeAccording