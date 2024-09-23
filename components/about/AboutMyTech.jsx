import { skills } from "../../pages/api/hello";

export default function TechnologiesTools()
{
    return (
        <div className="ccr_buble p-12  mx-auto">
            <ul className="flex flex-wrap justify-center relative list-none p-0 m-0 h-full w-full animate-fade-in">
                {skills.map((skill, index) =>
                {
                    const size = Math.floor(Math.random() * (90 - 70 + 1)) + 70;
                    const top = Math.random() * 80;
                    const left = Math.random() * 90;
                    const gradientClass = index % 2 === 0 ? "bg-gradient-to-r from-blue-500 to-violet-500" : "bg-gradient-to-r from-violet-500 to-blue-500";

                    return (
                        <li key={index} className="relative m-4 animate-pulse-odd ">
                            <div
                                style={{
                                    width: `${size}px`,
                                    height: `${size}px`,
                                    top: `${top}%`,
                                    left: `${left}%`,
                                }}
                                className={`${gradientClass} relative text-xs	text-white text-center font-semibold capitalize rounded-full flex items-center justify-center h-[100px] w-[100px] transform transition-all ease-in-out duration-400 hover:scale-125 hover:opacity-90 z-10 hover:animate-pulse `}>
                                {skill}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}
