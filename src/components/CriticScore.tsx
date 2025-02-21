interface Props {
    score: number
};
export const CriticScore = ({ score }: Props) => {
    const colorClasses = {
        green: "bg-green-200 dark:bg-green-800 opacity-50",
        yellow: "bg-yellow-200 dark:bg-yellow-700  opacity-50",
        gray: "bg-gray-200 dark:bg-gray-700  opacity-50",
    };

    const color = score > 75 ? "green" : score > 60 ? "yellow" : "gray";

    return (
        <span
            className={`text-gray-900 text-xs font-medium me-2 rounded-lg p-2 dark:text-gray-300 ${colorClasses[color]}`}
        >
            {score}
        </span>
    );
};
