
const SectionTitle = ({subHeading, mainHeading}) => {
    return (
        <div className="mx-auto md:w-4/12 my-8 text-center">
            <p className="text-[#D99904] italic">{subHeading}</p>
            <h3 className="text-[40px] border-y-4 py-4">{mainHeading}</h3>
        </div>
    );
};

export default SectionTitle;