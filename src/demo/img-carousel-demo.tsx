
import { CenteringContainer } from '../ui-kit/elements/centering-container';
import ImgCarousel from '../ui-kit/img-carousel/img-carousel';
import Image1 from './assets/aurora-1197753_960_720.jpg';
import Image2 from './assets/sunset-1373171__340.jpg';

function ImgCarouselDemo() {

const images: string[] = [Image1,Image2,"","","",""];

    return (

        <div>
            <h2>ImgCarousel</h2>
            <CenteringContainer>

                <ImgCarousel
                    uniqueId={"uniqueIdImageCarouselDemo"}
                    images={images} 
                    width={"100%"}
                    height={"300px"} />

            </CenteringContainer>
            <h2>PreviousNextButtons</h2>

        </div>

    )
}

export default ImgCarouselDemo