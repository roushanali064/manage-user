
type TProps = {
    handleNameSorting: ()=>void;
    handleEmailSorting: ()=>void;
    handleCompanyNameSorting: ()=>void;
}

const Sort = ({handleNameSorting,handleEmailSorting,handleCompanyNameSorting}: TProps) => {
    return (
        <div className="dropdown dropdown-hover mt-4 md:mt-0 mr-0 md:mr-4">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort User
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
          >
            <li onClick={handleNameSorting}>
              <span>Sort by name</span>
            </li>
            <li onClick={handleEmailSorting}>
              <span>Sort by email</span>
            </li>
            <li onClick={handleCompanyNameSorting}>
              <span>Sort by Company name</span>
            </li>
          </ul>
        </div>
    );
};

export default Sort;