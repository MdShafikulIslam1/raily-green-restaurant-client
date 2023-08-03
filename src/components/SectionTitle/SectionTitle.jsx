
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center md:w-1/4 mx-auto">
            <h2 className="text-orange-700 mb-2">--- {subHeading} ---</h2>
            <h1 className="text-2xl border-y-4 py-4 uppercase">{heading}</h1>
        </div>
    );
};

export default SectionTitle;