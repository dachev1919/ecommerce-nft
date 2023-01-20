const Helmet = ({title, children}) => {
    document.title = `NFTs - ${title}`;
    return <div className='w-100'>{children}</div>;
};

export default Helmet;