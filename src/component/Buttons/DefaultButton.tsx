const DefaultBtn = ({
    Text, ...rest
}: { Text: string } & React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>) => (
    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold text-xs py-1 px-2 rounded inline-flex items-center" {...rest}>
        {Text}
    </button>
);

export default DefaultBtn