import { useState } from "react";

const texts = [
    {
        text: 'NETFLIX',
        url: 'https://www.netflix.com/co/'

    },
    {
        text: 'AMAZON PRIME',
        url: 'https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_brd_co_hk_s_g_mkw_syhubpzea-dc_pcrid_645960031876?mrntrk=slid__pgrid_42306243568_pgeo_1029272_x__adext__ptid_kwd-3151046130'

    },
    {
        text: 'HBO',
        url: 'https://www.hbomax.com/co/es'

    },
    {
        text: 'STARPLUS',
        url: 'https://www.starplus.com/es-co?cid=DSS-Search-Google-71700000086505444-&s_kwcid=AL!8468!3!651883096714!e!!g!!starplus&gad=1&gclid=CjwKCAjwpayjBhAnEiwA-7ena7Nq4sO0VYauCnl5abxcDqwibO_5cDY2KWv4Zwwt92z2BEpoJAFk3xoCENgQAvD_BwE&gclsrc=aw.ds'

    }
];

const StreamingButton = ({ color = '#004AAD' }) => {
    const handleClick = (url) => {
        window.open(url);
    };

    return (
        <div className="buttonContainer" style={{ marginBottom: '20px' }}>
            <div className="buttonsRow" style={{ display: 'flex', flexDirection: 'row' }}>
                {texts.map((item, index) => (
                    <button
                        key={index}
                        style={{ backgroundColor: color }}
                        onClick={() => handleClick(item.url)}
                    >
                        {item.text}
                    </button>
                ))}
            </div>
        </div>
    );
};


export default StreamingButton;