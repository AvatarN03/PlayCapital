import axios from "axios"


export const featuresDetails = [
    {
        title:"Featured1",
        desc:"Featured 1 of the collection of features that are available for the co",
        id:1,

    },
    {
        title:"Featured2",
        desc:"Featured 2 of the collection of features that are available for the co",
        id:2,

    },
    {
        title:"Featured1",
        desc:"Featured 1 of the collection of features that are available for the co",
        id:3,

    },
    {
        title:"Featured1",
        desc:"Featured 1 of the collection of features that are available for the co",
        id:4,

    },
    {
        title:"Featured1",
        desc:"Featured 1 of the collection of features that are available for the co",
        id:5,

    },
    {
        title:"Featured1",
        desc:"Featured 1 of the collection of features that are available for the co",
        id:6,

    },
    {
        title:"Featured1",
        desc:"Featured 1 of the collection of features that are available for the co",
        id:7,

    },
    {
        title:"Featured1",
        desc:"Featured 1 of the collection of features that are available for the co",
        id:8,

    },
    {
        title:"Featured1",
        desc:"Featured 1 of the collection of features that are available for the co",
        id:9,

    }
]

export const navItems = [
    { url: '/', title: 'Home' },
    { url: '/features', title: 'Features' },
    { url: '/blog', title: 'Blog' }
  ]

  export const features = [
    {
      name: 'Play Money',
      description:
        'Our Platform provides the Learning experience uniqulty.',
      icon: "Money",
    },
    {
      name: 'Fun',
      description:
        'Our Platform provides the Learning experience by Introducing the 3 games ',
      icon: "Extension",
    },
    {
      name: 'Reliable ',
      description:
        'Our Platform is reliable and secure with authentication',
      icon: "LockOpen",
    },
  ]

  export const memberNames = [
    {
      name: "Manasvi Shirshat",
      image:"/assets/manasvi.JPG",
      desc: " A data analytics expert, specializing in extracting insights from data to guide project decisions. Her analytical mindset adds precision to the project’s strategy.",
      social: {
        linked: "kfdkfjkdlfjkdjfjfkljdf",
        insta: "kfdkfjkdlfjkdjfjfkljdf",
        github: "kfdkfjkdlfjkdjfjfkljdf",
  
  
      }
    },
    {
      name: "Chirag Dulera",
      image:"/assets/chirag.jpeg",
      desc: "A tech enthusiast with strong problem-solving skills, specializing in backend development. He ensures that the project’s infrastructure is robust and scalable.",
      social: {
        linked: "kfdkfjkdlfjkdjfjfkljdf",
        insta: "kfdkfjkdlfjkdjfjfkljdf",
        github: "kfdkfjkdlfjkdjfjfkljdf",
  
  
      }
    },
    {
      name: "Prashanth Naidu",
      image:"/assets/naidu.jpg",
      desc: "A creative thinker with a passion for front-end design, focused on delivering a seamless user experience. He excels in turning concepts into visually appealing interfaces.",
      social: {
        linked: "https://www.linkedin.com/in/prashanth-naidu-8049b8227/",
        insta: "https://www.instagram.com/js.prashanth?utm_source=qr&igsh=MWJ6bmM3NHNjdHZlaw==",
        github: "https://github.com/AvatarN03",
  
  
      }
    },
    {
      name: "Praniti Kubal",
      image:"/assets/praniti.jpeg",
      desc: "A detail-oriented project manager, ensuring smooth workflow and effective communication among the team. She is adept at organizing tasks and meeting deadlines.",
      social: {
        linked: "kfdkfjkdlfjkdjfjfkljdf",
        insta: "kfdkfjkdlfjkdjfjfkljdf",
        github: "kfdkfjkdlfjkdjfjfkljdf",
  
  
      }
    },
  ]

  export const loginInitial = {
    username: '',
    password: ''
  }
  
  export const signInitial = {
    username: '',
    email: '',
    password: '',
    avatar:null
  }

  export const loginCatch = async ( login, setLogin, setMessage, setError)=>{
    console.log("hey");
    console.log(login);
    
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URI}/api/login`, login);
    if (response.data.isSuccess) {
      setError("");
      setMessage('Login successful!');
      
      console.log(response.data);
      console.log(response.data.user);
      data.setAuth(response.data)
      console.log(data.setAuth);
      localStorage.setItem('Playtoken', response.data.token);
      
      
      setTimeout(() => {
        setRedirect(true);
      }, 2000);

    }
    else {
      setError(response.data.error)
      setTimeout(()=>{
        setLogin(loginInitial)
        setError("")

      },1000)
    }
    } catch (error) {
      
      console.log(error);
      
    }
   
    
    
  }


  
  export const options = [
    { id: 1, topic: "stockMarket" },
    { id: 2, topic: "CryptoCurrency" },
    { id: 3, topic: "Option Trading" },
    { id: 4, topic: "DropShipping" }
];