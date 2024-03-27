// import { memberManagement } from './members.js'
// const { getMembers, findMember } = memberManagement()
// //your student id, firstname, and lastname here
// function memberForm() {  
//     const addEventHandler = () => {  
//         const membtn = document.getElementById("member")

//         membtn.addEventListener("click" , memberHandler)
//       }  
      
      
//     const memberHandler = () => {
//         document.getElementById("foundMember").innerHTML = ''
//         const searchId = document.createElement('div')
//         searchId.id = 'searchMember'
//         searchId.innerHTML  = '<p>Your Member Id:</p>' +
//         '<input id="memberId">' +
//         '<button onclick="searchHandler()">search</button>';
//         var container = document.getElementById('container');
//         container.appendChild(searchId);


//     }  
           
           
//     const searchHandler = () => {
//         document.getElementById('foundMember').innerHTML = '';

//      }  
//      return {   
//      addEventHandler  
//     }
//     }
//      const { addEventHandler } = memberForm()
//      addEventHandler()

import { memberManagement } from './member.js'
const { getMembers, findMember } = memberManagement()

//your student id, firstname, and lastname here


function memberForm() {
  // const buttonPa = document.getElementById("buttonPanel")
  // const memDetail = document.getElementById("memberDetail")

  const addEventHandler = () => {
    const memButton = document.getElementById("member")
    memButton.addEventListener("click",memberHandler)
  }

  const memberHandler = () => {
    const serchMem = document.getElementById("searchMember")
    serchMem.textContent = ''

    const pElement = document.createElement('p')
    pElement.textContent = "Your Member Id :"
    serchMem.appendChild(pElement)

    const inputElement = document.createElement('input')
    inputElement.setAttribute('id','memberId')
    serchMem.appendChild(inputElement)

    const buttonEle = document.createElement('button')
    buttonEle.textContent = "search"
    serchMem.appendChild(buttonEle)
     
    buttonEle.addEventListener("click", searchHandler)
    
  }

  const searchHandler = () => {
  //   const memberId = document.getElementById("memberId")
  //   const intId = parseInt(memberId.value)
  //   const member = findMember(memberId)

  //   const foundMember = document.getElementById("foundMember")
  //   foundMember.textContent = ''

  //   if (member !== null) {
  //       const p = document.createElement('p');
  //       p.textContent = foundMember.value
  //       foundMember.appendChild(p)

  //   } else {
  //     const pElement = document.createElement('p')
  //     foundMember.appendChild(pElement)
  //   }


  const memberId = document.getElementById('memberId').value

    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
    const p4 = document.createElement('p')
    const p5 = document.createElement('p')
    const foundMember = document.getElementById('foundMember')

    foundMember.textContent = ''

    const member = findMember(parseInt(memberId))

    p1.textContent = `id:${member.id}`
    p2.textContent = `firstname:${member.firstname}`
    p3.textContent = `lastname:${member.lastname}`
    p4.textContent = `email:${member.email}`
    p5.textContent = `address:${member.address}`

    foundMember.appendChild(p1)
    foundMember.appendChild(p2)
    foundMember.appendChild(p3)
    foundMember.appendChild(p4)
    foundMember.appendChild(p5)
  }
}

//   return {
//     addEventHandler
//   }
// }

// const { addEventHandler } = memberForm()
// addEventHandler()