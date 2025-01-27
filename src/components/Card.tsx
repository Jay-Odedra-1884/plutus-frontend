

interface CardProps {
    data: {
        name: string;
        description: string;
        image: string;
    };
    classname?: string;
}

export default function Card({ data, classname }: CardProps) {
    return (
        <div className={`bg-theme_black-light text-black dark:bg-black dark:text-white p-4 m-4 rounded-lg shadow-lg ${classname} hover:shadow-2xl transform hover:-translate-y-3 hover:scale-105 transition duration-300 ease-in-out`}>
            <div className="flex justify-center mb-5">
                <img className="w-full rounded-lg h-80" src={data.image} alt="pic" />
            </div> 
            <div>
                <p className="font-bold mb-1 text-xl">{data.name}</p>
                <p className="opacity-65">{data.description}</p>
            </div>
        </div>
    );
}