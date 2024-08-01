// function raidio(){
//     const radioButtonsWrapElem = document.getElementById("radioButtonsWrapElem");//rootForm
// //create react div with this id
// const data = {
//   'dd': 'dard',
//   'kk': 'kooft'
// };
// for (let key in data) {
//   let label = document.createElement("label");
//   label.innerText = key;
//   let input = document.createElement("input");
//   input.type = "radio";
//   input.name='ghazal'; //radio title
//   label.appendChild(input);
//   radioButtonsWrapElem?.appendChild(label);
// }
// //var keys = Object.keys(data);
// }


// function createRadioButton(el:Element){  //el:raidio
//     const radioButtonsWrapElem = document.getElementById("radioButtonsWrapElem");//rootForm
//     //create react div with this id
//     const data = {
//       White: false,
//       "Light Grey": false,
//       "Dark Grey": false,
//       Black: false,
//     };
//     for (let key in data) {
//       let label = document.createElement("label");
//       label.innerText = key;
//       let input = document.createElement("input");
//       input.type = "radio";
//       input.name='ghazal'; //radio title
//       label.appendChild(input);
//       radioButtonsWrapElem?.appendChild(label);
//     }
//     console.log('****',radioButtonsWrapElem);
// }

// function createInput(){
//     console.log('*** label **',inputLabelElement)

// const rooootEl = document.getElementById("radioButtonsWrapElem");//rootForm
    
// rooootEl?.innerHTML?.concat(renderToString(inputLabelElement)); //= renderToString(inputLabelElement)??document.createElement('div');
// //render(element, container[, callback])
// // rootForm.current.//.append(inputElement)
// // render: function() {
// //     return React.createElement(MyLabel, {label: "Here is the label prop"},
// //       React.createElement("div", {},
// //         React.createElement("input", {type: "text", value: "And here is a child"})
// //       )
// //     );
// //   }
// return inputElement;
//   }

// function createDropDown(el: Element){
//     console.log('hi from dropdowm!!')
//     const radioButtonsWrapElem = document.getElementById("radioButtonsWrapElem");//rootForm
//     //create react div with this id
//     const options = {
//         R: 'Red',
//         G: 'Green',
//         B: 'Blue',
//     };
//     const optionKeys = Object.keys(options);
//     const selectElement= document.createElement('select');
//     for(let key of optionKeys){
//         const optionNode= document.createElement('option')
//         optionNode.text = key;
//         optionNode.value = options.B; //options[key]
//         selectElement.appendChild(optionNode);
//     }
//     radioButtonsWrapElem?.appendChild(selectElement);
//     console.log('drop ',radioButtonsWrapElem )
//  }

 // const inputElement = React.createElement("input", { required: el.option.requierd, type:'text' , name:el.title }); //name??
// //const inputLabelElement = React.createElement("label", { htmlFor:el.title  }, el.title);
// const inputLabelElement = React.createElement("label", { htmlFor:el.title  }, el.title,
//   React.createElement("input", { required: el.option.requierd, type:'text' , name:el.title })
// );


// export function GenerateForm({ elements }: GenerateFormProps) {

//     return (
//       <div>
          
//         {/* <form className="form" onSubmit={}>
//           {elements.map((el) => {
//             const Component = componentTypeMap[el.type];
//             return <Component key={el.id} el={el} />;
//           })}
//           <button></button>
//         </form> */}
//       </div>
//     );
//   }