
interface SectionHeaderProps {
    name: string;
    description: string | null | undefined;
}
  
const SectionHeader = ({ name, description }: SectionHeaderProps) => {
return (
    <div className="mb-8 flex flex-col items-center justify-center text-center">
    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-0 leading-none">
        {name}
    </h1>

    {description && (
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl text-lg text-center mt-2">
        {description}
        </p>
    )}
    </div>
);
};

export default SectionHeader