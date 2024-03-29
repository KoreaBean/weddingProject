import {Link} from "react-router-dom";
import './Home.css';

export default function Home(){

    function goToGuide(){

    }
    return(
        <div>
            <div className="container">
                <div className="home1_div" >
                    <div className="home1_img">

                    </div>
                    <div className="home1_content">
                        <span><h2>웨딩의 소중한 순간, "웨딩하모니"와 함께</h2></span>
                        <div>
                            <span>결혼 준비의 그 긴 시간과 고단했던 순간들, 이제는 사랑하는 연인과 함께 한 약속으로 빛나게 마무리하세요.<br/></span>
                            <span>더 이상 어렵고 복잡하게 느껴지는 웨딩 준비에 마음졸이지 마세요. 우리 '웨딩하모니'가 여러분의 결혼 준비를 든든하게 도와드릴게요.</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h2><span>웨딩하모니로 여러분은..</span></h2>
                    </div>
                    <div>
                        <span>웨딩 장소부터 스튜디오, 드레스, 메이크업까지 원하는 서비스를 쉽고 편하게 선택할 수 있어요</span><br/>
                        <span>버튼 한번 클릭으로 모든 웨딩 준비가 진행됩니다. 간편하죠?</span><br/>
                        <span>예산부담 없이 꿈꿔왔던 완벽한 결혼식을 실현 시켜보세요!</span>
                    </div>
                </div>

                <div>
                    <div>
                        <img src="#" alt="home2"/>
                    </div>
                    <div>
                        <div>
                            <h2><span>당신의 결혼식이야말로, 우리의 가장 큰 축제입니다!</span></h2>
                        </div>
                        <div>
                            <span>웨딩이라는 빛나는 꿈 앞에 선 모든 분들께 "웨딩하모니"는 최고의 파트너가 되어 드릴 것을 약속드립니다.</span>
                            <span>지금까지 쌓아온 전문성과 섬세함으로 여러분만의 이야기가 담긴 웨딩을 만들어 드리겠습니다.</span>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <img src="#" alt="home3"/>
                    </div>
                    <div>
                        <div>
                            <span>진심을 다해 여러분의 소중한 순간을 함께하고 싶어요.</span>
                            <span>"웨딩하모니"와 함께라면, 여러분의 결혼 준비는 더 이상 어렵지 않습니다.</span>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h3>우리와 함께라면 여러분의 웨딩 스토리는 이미 완벽합니다.</h3>
                        <h3>"웨딩하모니"에서 여러분의 빛나는 순간을 기대하세요!</h3>
                    </div>
                </div>

                <div>
                    <div>
                        <Link to="/v1/Guid"><button>웨딩 가이드 보기</button></Link>
                    </div>
                    <div>
                        <Link to="/v1/Guid"><button>웨딩 시작하기</button></Link>
                    </div>
                </div>

            </div>
            

        </div>
    )
}