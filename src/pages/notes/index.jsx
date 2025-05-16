import Header from "../../components/header";
import LeftPanel from "../../components/left-panel";
import "./styles.css";

function Notes() {

  return (
    <>
      <div className="page__container">

        <LeftPanel/>

        <div className="page__content">

          <Header/>

          <div className="page__content__main">

            <div className="page__content__main__notes">
            </div>

            <div className="page__content__main__note">
            </div>

            <div className="page__content__main__options">
            </div>

          </div>

        </div>

      </div>
    
    </>
  
  );

}

export default Notes;