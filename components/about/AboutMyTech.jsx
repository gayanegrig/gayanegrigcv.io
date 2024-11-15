import { useState } from "react";
import { useEffect } from "react";


export default function TechnologiesTools()
{
    const [mySkills, setmySkills] = useState()
    const fetchMySkills = async () =>
    {
        const response = await fetch('/api/skills-data');
        const data = await response.json();
        setmySkills(data);
    };

    useEffect(() =>
    {
        fetchMySkills();
    }, []);
    return (
        <div className="ccr_buble p-12 mx-auto">
            <ul className="flex flex-wrap justify-center relative list-none p-0 m-0 h-full w-full animate-fade-in">
                {mySkills?.map((skill, index) =>
                {
                    const size = Math.floor(Math.random() * (90 - 70 + 1)) + 70;
                    const top = Math.random() * 80;
                    const left = Math.random() * 90;
                    const gradientClass =
                        index % 2 === 0
                            ? "bg-gradient-to-r from-blue-500 to-violet-500"
                            : "bg-gradient-to-r from-violet-500 to-blue-500";

                    const isPrimary = skill.isPrimary;

                    return (
                        <li key={index} className="relative m-4 animate-pulse-odd">
                            <div
                                style={{
                                    width: `${size}px`,
                                    height: `${size}px`,
                                    top: `${top}%`,
                                    left: `${left}%`,
                                }}
                                className={`${gradientClass} relative text-xs text-white text-center font-semibold capitalize rounded-full flex items-center justify-center h-[100px] w-[100px] transform transition-all ease-in-out duration-400 hover:scale-125 hover:opacity-90 z-10 hover:animate-pulse ${isPrimary ? "border-4 border-blue-50" : ""
                                    }`}
                            >
                                {isPrimary && (
                                    <span className="absolute top-1 right-1  bg-blue-50 text-black px-1 rounded-full" style={{ fontSize: '8px' }}>
                                        Primary
                                    </span>
                                )}
                                {skill.name}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
