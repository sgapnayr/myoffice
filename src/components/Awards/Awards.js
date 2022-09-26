import React from 'react'

function Awards() {
    return (
        <>
            <div className="About" data-aos="fade" data-aos-duration="100">
                <div className="Awards">
                    <div className="Award" data-aos="slide-right" data-aos-duration="1000">
                        <div className="Icon">
                            &#9990;
                        </div>
                        <div className="AwardInfo">Most client-services cases handled</div>
                    </div>
                    <div className="Award" data-aos="slide-right" data-aos-duration="1300">
                        <div className="Icon">
                            &#9998;
                        </div>
                        <div className="AwardInfo">Least amount of complaints recorded for a Fortune 500</div>
                    </div>
                    <div className="Award" data-aos="slide-right" data-aos-duration="1400">
                        <div className="Icon">
                            &#10044;
                        </div>
                        <div className="AwardInfo">Voted #1 most networked company culture in the westen hemisphere</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Awards