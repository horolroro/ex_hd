import './scroll-timeline.js';
import './nav.js';

const gallery = document.querySelector('.gallery');
const galleryTimeline = document.querySelector('.gallery-timeline');
const galleryitems = document.querySelectorAll('.gallery-item');
let total;

const item2_grouptext1 = document.querySelector('.item2_clip_text');
const item2_elm_bg_1 = document.querySelector('.item2_bg1');
const item2_elm_bg_2 = document.querySelector('.item2_bg2');
const item2_elm_bg_3 = document.querySelector('.item2_bg3');

<<<<<<< .mine
//nav
const bar = document.querySelector('.nav-list .progressbar');
||||||| .r376
=======
const item3_grouptext1 = document.querySelector('.item3_clip_text');
const item3_elm_bg_1 = document.querySelector('.item3_bg1');
const item3_elm_bg_2 = document.querySelector('.item3_bg2');
const item3_elm_bg_3 = document.querySelector('.item3_bg3');
>>>>>>> .r377

<<<<<<< .mine
// bar.animate(
//   [
//     { transform: 'scaleX(0)',offset: 0 },
//     { transform: 'scaleX(1)',offset: 1 }
//   ],
//   {
//     fill: 'both',
//     timeline: new ScrollTimeline({
//       scrollOffsets: [
//         { target: galleryTimeline, edge: 'start', threshold: 1 },
//         { target: galleryTimeline, edge: 'end', threshold: 1 }
//       ]
//     })
//   }
// );

//갤러리 넓이
let galleryWidth = ()=>{
  total=0;
  galleryitems.forEach(elm =>{
    total += elm.clientWidth;
  })
  gallery.style.width = `${total}px`
 }
 galleryWidth()

 gallery.animate(
  [
    { transform: 'translateX(0)',offset: 0 },
    { transform: 'translateX(calc(-100% + 100vw))',offset: 1 }
  ],
  {
    fill: 'both',
    timeline: new ScrollTimeline({
      scrollOffsets: [
        { target: galleryTimeline, edge: 'start', threshold: 1 },
        { target: galleryTimeline, edge: 'end', threshold: 1 }
      ]
    })
  }
);


 
||||||| .r376
=======
const item4_grouptext1 = document.querySelector('.item4_clip_text');
const item4_elm_bg_1 = document.querySelector('.item4_bg1');
const item4_elm_bg_2 = document.querySelector('.item4_bg2');
const item4_elm_bg_3 = document.querySelector('.item4_bg3');

const item5_grouptext1 = document.querySelector('.item5_clip_text');
const item5_elm_bg_1 = document.querySelector('.item5_bg1');
const item5_elm_bg_2 = document.querySelector('.item5_bg2');
const item5_elm_bg_3 = document.querySelector('.item5_bg3');



>>>>>>> .r377
gallery.animate(
  [
    { transform: 'translateX(0)', offset: 0 },
    { transform: 'translateX(calc(-100% + 100vw))', offset: 1 }
  ],
  {
    fill: 'both',
    easing: 'linear',
    //duration: 2500,
    timeline: new ScrollTimeline({
      scrollOffsets: [
        { target: galleryTimeline, edge: 'start', threshold: 1 },
        { target: galleryTimeline, edge: 'end', threshold: 1 }
      ]
    })
  }
);


const item2 = {
  init: ()=>{
    item2.text1();
    //item2.bg_1();
    item2.bg_2();
    item2.bg_3();
  },
  text1 : ()=>{
    item2_grouptext1.animate(
      [
        {opacity:'0', color: "#000", left: '20%', offset: 0.009},
        {opacity:'1', color: "transparent", left: '4.7%', offset: 0.018}
      ],
      {
        fill: 'both',
        easing: 'ease',
        timeline: new ScrollTimeline({
          scrollOffsets: [
            {target: galleryTimeline, edge: 'start', threshold: 1},
            {target: galleryTimeline, edge: 'end', threshold: 1}
          ]
        })
      }
    )
  },
  // bg_1 : ()=>{
  //   item2_elm_bg_1.animate(
  //     [
  //       { backgroundPositionX: '100%',offset: 0.025 },
  //       { backgroundPositionX: '0%',offset: 0.055 },
  //     ],
  //     {
  //       fill: 'both',
  //       timeline: new ScrollTimeline({
  //         scrollOffsets: [
  //           { target: galleryTimeline, edge: 'start', threshold: 1 },
  //           { target: galleryTimeline, edge: 'end', threshold: 1 }
  //         ]
  //       })
  //     }
  //   )
  // },
  bg_2 : ()=>{
    item2_elm_bg_2.animate(
      [
        { opacity:'0', transform: 'translateX(80%)',offset: 0.03 },
        { opacity:'1', transform: 'translateX(0)',offset: 0.065 },
      ],
      {
        fill: 'both',
        easing: 'ease',
        timeline: new ScrollTimeline({
          scrollOffsets: [
            { target: galleryTimeline, edge: 'start', threshold: 1 },
            { target: galleryTimeline, edge: 'end', threshold: 1 }
          ]
        })
      }
    )
  },
  bg_3 : ()=>{
    item2_elm_bg_3.animate(
      [
        { opacity:'0', transform: 'translateX(100%)',offset: 0.05 },
        { opacity:'1', transform: 'translateX(0)',offset: 0.25 },
      ],
      {
        fill: 'both',
        easing: 'ease',
        timeline: new ScrollTimeline({
          scrollOffsets: [
            { target: galleryTimeline, edge: 'start', threshold: 1 },
            { target: galleryTimeline, edge: 'end', threshold: 1 }
          ]
        })
      }
    )
  },
}

const item3 = {
  init: ()=>{
    item3.text1();
    //item3.bg_1();
    item3.bg_2();
    item3.bg_3();
  },
  text1 : ()=>{
    item3_grouptext1.animate(
      [
        {opacity:'0', color: "#000", left: '30%', offset: 0.17},
        {opacity:'1', color: "transparent", left: '5.4%', offset: 0.2}
      ],
      {
        fill: 'both',
        duration: 5,
        easing: 'linear',
        timeline: new ScrollTimeline({
          scrollOffsets: [
            {target: galleryTimeline, edge: 'start', threshold: 1},
            {target: galleryTimeline, edge: 'end', threshold: 1}
          ]
        })
      }
    )
  },
  // bg_1 : ()=>{
  //   item3_elm_bg_1.animate(
  //     [
  //       { backgroundPositionX: '100%',offset: 0.04 },
  //       { backgroundPositionX: '0%',offset: 0.1 },
  //     ],
  //     {
  //       fill: 'both',
  //       timeline: new ScrollTimeline({
  //         scrollOffsets: [
  //           { target: galleryTimeline, edge: 'start', threshold: 1 },
  //           { target: galleryTimeline, edge: 'end', threshold: 1 }
  //         ]
  //       })
  //     }
  //   )
  // },
  bg_2 : ()=>{
    item3_elm_bg_2.animate(
      [
        { opacity:'0', transform: 'translateX(100%)', offset: 0.3 },
        { opacity:'1', transform: 'translateX(0)', offset: 0.4 },
      ],
      {
        fill: 'both',
        easing: 'ease',
        timeline: new ScrollTimeline({
          scrollOffsets: [
            { target: galleryTimeline, edge: 'start', threshold: 1 },
            { target: galleryTimeline, edge: 'end', threshold: 1 }
          ]
        })
      }
    )
  },
  bg_3 : ()=>{
    item3_elm_bg_3.animate(
      [
        { opacity:'0', transform: 'translateX(40%) translateY(-50%)', offset: 0.45 },
        { opacity:'1', transform: 'translateX(0) translateY(-50%)', offset: 0.5 },
      ],
      {
        fill: 'both',
        duration: 5,
        easing: 'ease',
        timeline: new ScrollTimeline({
          scrollOffsets: [
            { target: galleryTimeline, edge: 'start', threshold: 1 },
            { target: galleryTimeline, edge: 'end', threshold: 1 }
          ]
        })
      }
    )
  },
}

const item4 = {
  init: ()=>{
    item4.text1();
    //item4.bg_1();
    item4.bg_2();
    //item4.bg_3();
  },
  text1 : ()=>{
    item4_grouptext1.animate(
      [
        {opacity:'0', color: "#000", left: '50%', offset: 0.29},
        {opacity:'1', color: "transparent", left: '16.7%', offset: 0.37}
      ],
      {
        fill: 'both',
        duration: 1,
        easing: 'linear',
        timeline: new ScrollTimeline({
          scrollOffsets: [
            {target: galleryTimeline, edge: 'start', threshold: 1},
            {target: galleryTimeline, edge: 'end', threshold: 1}
          ]
        })
      }
    )
  },
  // bg_1 : ()=>{
  //   item4_elm_bg_1.animate(
  //     [
  //       { backgroundPositionX: '100%',offset: 0.04 },
  //       { backgroundPositionX: '0%',offset: 0.1 },
  //     ], 관둘까.. 하;;
  //     {
  //       fill: 'both',
  //       timeline: new ScrollTimeline({
  //         scrollOffsets: [
  //           { target: galleryTimeline, edge: 'start', threshold: 1 },
  //           { target: galleryTimeline, edge: 'end', threshold: 1 }
  //         ]
  //       })
  //     }
  //   )
  // },
  bg_2 : ()=>{
    item4_elm_bg_2.animate(
      [
        { opacity:'0', transform: 'translateX(100%)', offset: 0.48 },
        { opacity:'1', transform: 'translateX(0)', offset: 0.75 },
      ],
      {
        fill: 'both',
        duration: 5,
        easing: 'ease',
        timeline: new ScrollTimeline({
          scrollOffsets: [
            { target: galleryTimeline, edge: 'start', threshold: 1 },
            { target: galleryTimeline, edge: 'end', threshold: 1 }
          ]
        })
      }
    )
  },
  // bg_3 : ()=>{
  //   item4_elm_bg_3.animate(
  //     [
  //       { opacity:'0', transform: 'translateX(40%) translateY(-50%)',offset: 0.45 },
  //       { opacity:'1', transform: 'translateX(0) translateY(-50%)',offset: 0.55 },
  //     ],
  //     {
  //       fill: 'both',
  //       duration: 5,
  //       easing: 'ease',
  //       timeline: new ScrollTimeline({
  //         scrollOffsets: [
  //           { target: galleryTimeline, edge: 'start', threshold: 1 },
  //           { target: galleryTimeline, edge: 'end', threshold: 1 }
  //         ]
  //       })
  //     }
  //   )
  // },
}

const item5 = {
  init: ()=>{
    item5.text1();
    //item5.bg_1();
    item5.bg_2();
    item5.bg_3();
  },
  text1 : ()=>{
    item5_grouptext1.animate(
      [
        {opacity:'0', color: "#000", left: '50%', offset: 0.45},
        {opacity:'1', color: "transparent", left: '16.7%', offset: 0.51}
      ],
      {
        fill: 'both',
        duration: 5,
        easing: 'linear',
        timeline: new ScrollTimeline({
          scrollOffsets: [
            {target: galleryTimeline, edge: 'start', threshold: 1},
            {target: galleryTimeline, edge: 'end', threshold: 1}
          ]
        })
      }
    )
  },
  // bg_1 : ()=>{
  //   item5_elm_bg_1.animate(
  //     [
  //       { backgroundPositionX: '100%',offset: 0.04 },
  //       { backgroundPositionX: '0%',offset: 0.1 },
  //     ],
  //     {
  //       fill: 'both',
  //       timeline: new ScrollTimeline({
  //         scrollOffsets: [
  //           { target: galleryTimeline, edge: 'start', threshold: 1 },
  //           { target: galleryTimeline, edge: 'end', threshold: 1 }
  //         ]
  //       })
  //     }
  //   )
  // },
  bg_2 : ()=>{
    item5_elm_bg_2.animate(
      [
        { opacity:'0', transform: 'translateX(200%)', offset: 0.7 },
        { opacity:'1', transform: 'translateX(0)', offset: 0.85 },
      ],
      {
        fill: 'both',
        duration: 5,
        easing: 'ease',
        timeline: new ScrollTimeline({
          scrollOffsets: [
            { target: galleryTimeline, edge: 'start', threshold: 1 },
            { target: galleryTimeline, edge: 'end', threshold: 1 }
          ]
        })
      }
    )
  },
  bg_3 : ()=>{
    item5_elm_bg_3.animate(
      [
        { opacity:'0', transform: 'translateX(40%) translateY(-50%)',offset: 0.8 },
        { opacity:'1', transform: 'translateX(0) translateY(-50%)',offset: 0.92 },
      ],
      {
        fill: 'both',
        duration: 5,
        easing: 'ease',
        timeline: new ScrollTimeline({
          scrollOffsets: [
            { target: galleryTimeline, edge: 'start', threshold: 1 },
            { target: galleryTimeline, edge: 'end', threshold: 1 }
          ]
        })
      }
    )
  },
}






item2.init();
item3.init();
item4.init();
item5.init();




document.addEventListener('DOMContentLoaded', () => {

  function updateTotalWidth() {
    const sections = document.querySelectorAll('.gallery-item');
    const gallery = $('.gallery');
    let totalWidth = 0;

    sections.forEach(section => {
      totalWidth += section.offsetWidth; // Calculate the total width
    });

    console.log('Total width:', totalWidth);
    gallery.css('max-width',totalWidth)
  }

  updateTotalWidth();

  window.addEventListener('resize', updateTotalWidth);
});
