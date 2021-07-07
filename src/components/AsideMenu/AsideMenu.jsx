import React, {useContext, useState, useEffect} from 'react';
import { StoreContext } from '../../store/StoreProvider';
import { Link, useHistory } from "react-router-dom";

import bemCssModules from 'bem-css-modules'
import { default as AsideMenuStyles } from './AsideMenu.module.scss';

const block = bemCssModules(AsideMenuStyles)

const AsideMenu = () => {
  const {courses} = useContext(StoreContext);
  const history = useHistory();
  const [trueFilters, setTrueFilters] = useState([]);

  const [isSubmit, setIsSubmit] = useState(false);
  const [filtreCourses, setFiltreCourses] = useState([...courses]);
  const [widthWindow, setWidthWindow] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const [basic, setBasic] = useState(false);
  const [intermediate, setIntermediate] = useState(false);
  const [advance, setAdvance] = useState(false);
  const [noLevel, setNoLevel] = useState(true);

  const [short, setShort] = useState(false);
  const [medium, setMedium] = useState(false);
  const [long, setLong] = useState(false);
  const [noTime, setNoTime] = useState(true);

  const [python, setPython] = useState(false);
  const [javaScript, setJavaScript] = useState(false);
  const [react, setReact] = useState(false);
  const [java, setJava] = useState(false);
  const [git, setGit] = useState(false);
  const [frontend, setFrontend] = useState(false);
  const [backend, setBackend] = useState(false);
  const [noTopic, setNoTopic] = useState(true);

  const [small, setSmall] = useState(false);
  const [mediumPrice, setMediumPrice] = useState(false);
  const [big, setBig] = useState(false);
  const [noPrice, setNoPrice] = useState(true);

  const [allFilters, setAllFilters] = useState({
    level: {basic,intermediate, advance, noLevel}, 
    time: {short, medium, long, noTime},
    price: {small, mediumPrice, big, noPrice},
    topic: {python, javaScript, react, java, git, frontend, backend, noTopic}
  });

  const handleBasicChange = () => {
    setBasic(true)
    setIntermediate(false)
    setAdvance(false)
    setNoLevel(false)
    setAllFilters({
      level: {basic: true, intermediate:false, advance:false, noLevel:false}, 
      time: {short, medium, long, noTime},
      price: {small, mediumPrice, big, noPrice},
      topic: {python, javaScript, react, java, git, frontend, backend, noTopic}
    })
  }
  const handleIntermediateChange = () => {
    setIntermediate(true)
    setBasic(false)
    setAdvance(false)
    setNoLevel(false)
    setAllFilters({
      level: {basic: false, intermediate:true, advance:false, noLevel:false},
      time: {short, medium, long, noTime},
      price: {small, mediumPrice, big, noPrice},
      topic: {python, javaScript, react, java, git, frontend, backend, noTopic}
    })
  }
  const handleAdvanceChange = () => {
    setAdvance(true)
    setBasic(false)
    setIntermediate(false)
    setNoLevel(false)
    setAllFilters({
      level: {basic: false, intermediate:false, advance:true, noLevel:false},
      time: {short, medium, long, noTime},
      price: {small, mediumPrice, big, noPrice},
      topic: {python, javaScript, react, java, git, frontend, backend, noTopic}
    })
  }
  const handleNoLevelChange = () => {
    setNoLevel(true)
    setBasic(false)
    setIntermediate(false)
    setAdvance(false)
    setAllFilters({
      level: {basic: false, intermediate:false, advance:false, noLevel:true},
      time: {short, medium, long, noTime},
      price: {small, mediumPrice, big, noPrice},
      topic: {python, javaScript, react, java, git, frontend, backend, noTopic}
    })
  }

  const handleShortChange = () => {
    setShort(true)
    setMedium(false)
    setLong(false)
    setNoTime(false)
    setAllFilters({
      level: {basic,intermediate, advance, noLevel}, 
      time: {short: true, medium: false, long: false, noTime: false},
      price: {small, mediumPrice, big, noPrice},
      topic: {python, javaScript, react, java, git, frontend, backend, noTopic}
    })
  }
  const handleMediumChange = () => {
    setMedium(true)
    setShort(false)
    setLong(false)
    setNoTime(false)
    setAllFilters({
      level: {basic,intermediate, advance, noLevel}, 
      time: {short: false, medium: true, long: false, noTime: false},
      price: {small, mediumPrice, big, noPrice},
      topic: {python, javaScript, react, java, git, frontend, backend, noTopic}
    })
  }
  const handleLongChange = () => { 
    setLong(true)
    setMedium(false)
    setShort(false)
    setNoTime(false)
    setAllFilters({
      level: {basic,intermediate, advance, noLevel}, 
      time: {short: false, medium: false, long: true, noTime: false},
      price: {small, mediumPrice, big, noPrice},
      topic: {python, javaScript, react, java, git, frontend, backend, noTopic}
    })
  }
  const handleNoTimeChange = () => {
    setNoTime(true)
    setMedium(false)
    setLong(false)
    setShort(false)
    setAllFilters({
      level: {basic,intermediate, advance, noLevel}, 
      time: {short: false, medium: false, long: false, noTime: true},
      price: {small, mediumPrice, big, noPrice},
      topic: {python, javaScript, react, java, git, frontend, backend, noTopic}
    })
  }

  const handlePyhonChange = () => {
    setPython(true)
    setJavaScript(false)
    setReact(false)
    setJava(false)
    setGit(false)
    setFrontend(false)
    setBackend(false)
    setNoTopic(false)
    setAllFilters({
      level: {basic,intermediate, advance, noLevel}, 
      time: {short, medium, long, noTime},
      price: {small, mediumPrice, big, noPrice},
      topic: {python: true, javaScript: false, react: false, java: false, git: false, frontend: false, backend: false, noTopic: false}
    })
  }
  const handleJavaScriptChange = () => {
    setJavaScript(true)
    setPython(false)
    setReact(false)
    setJava(false)
    setGit(false)
    setFrontend(false)
    setBackend(false)
    setNoTopic(false)
    setAllFilters({
      level: {basic,intermediate, advance, noLevel}, 
      time: {short, medium, long, noTime},
      price: {small, mediumPrice, big, noPrice},
      topic: {python: false, javaScript: true, react: false, java: false, git: false, frontend: false, backend: false, noTopic: false}
    })
  }
  const handleReactChange = () => {
    setReact(true)
    setJavaScript(false)
    setPython(false)
    setJava(false)
    setGit(false)
    setFrontend(false)
    setBackend(false)
    setNoTopic(false)
    setAllFilters({
      level: {basic,intermediate, advance, noLevel}, 
      time: {short, medium, long, noTime},
      price: {small, mediumPrice, big, noPrice},
      topic: {python: false, javaScript: false, react: true, java: false, git: false, frontend: false, backend: false, noTopic: false}
    })
  }
  const handleJavaChange = () => {
    setJava(true)
    setJavaScript(false)
    setReact(false)
    setPython(false)
    setGit(false)
    setFrontend(false)
    setBackend(false)
    setNoTopic(false)
    setAllFilters({
      level: {basic,intermediate, advance, noLevel}, 
      time: {short, medium, long, noTime},
      price: {small, mediumPrice, big, noPrice},
      topic: {python: false, javaScript: false, react: false, java: true, git: false, frontend: false, backend: false, noTopic: false}
    })
  }
  const handleGitChange = () => {
    setGit(true)
    setJavaScript(false)
    setReact(false)
    setJava(false)
    setPython(false)
    setFrontend(false)
    setBackend(false)
    setNoTopic(false)
    setAllFilters({
      level: {basic,intermediate, advance, noLevel}, 
      time: {short, medium, long, noTime},
      price: {small, mediumPrice, big, noPrice},
      topic: {python: false, javaScript: false, react: false, java: false, git: true, frontend: false, backend: false, noTopic: false}
    })
  }
  const handleFrontendChange = () => {
    setFrontend(true)
    setJavaScript(false)
    setReact(false)
    setJava(false)
    setGit(false)
    setPython(false)
    setBackend(false)
    setNoTopic(false)
    setAllFilters({
      level: {basic,intermediate, advance, noLevel}, 
      time: {short, medium, long, noTime},
      price: {small, mediumPrice, big, noPrice},
      topic: {python: false, javaScript: false, react: false, java: false, git: false, frontend: true, backend: false, noTopic: false}
    })
  }
  const handleBackendChange = () => {
    setBackend(true)
    setJavaScript(false)
    setReact(false)
    setJava(false)
    setGit(false)
    setFrontend(false)
    setPython(false)
    setNoTopic(false)
    setAllFilters({
      level: {basic,intermediate, advance, noLevel}, 
      time: {short, medium, long, noTime},
      price: {small, mediumPrice, big, noPrice},
      topic: {python: false, javaScript: false, react: false, java: false, git: false, frontend: false, backend: true, noTopic: false}
    })
  }
  const handleNoTopicChange = () => {
    setNoTopic(true)
    setJavaScript(false)
    setReact(false)
    setJava(false)
    setGit(false)
    setFrontend(false)
    setBackend(false)
    setPython(false)
    setAllFilters({
      level: {basic,intermediate, advance, noLevel}, 
      time: {short, medium, long, noTime},
      price: {small, mediumPrice, big, noPrice},
      topic: {python: false, javaScript: false, react: false, java: false, git: false, frontend: false, backend: false, noTopic: true}
    })
  }

  const handleSmallChange = () => {
    setSmall(true)
    setMediumPrice(false)
    setBig(false)
    setNoPrice(false)
    setAllFilters({
      level: {basic,intermediate, advance, noLevel}, 
      time: {short, medium, long, noTime},
      price: {small: true, mediumPrice: false, big: false, noPrice: false},
      topic: {python, javaScript, react, java, git, frontend, backend, noTopic}
    });
  }
  const handleMediumPriceChange = () => {
    setMediumPrice(true)
    setSmall(false)
    setBig(false)
    setNoPrice(false)
    setAllFilters({
      level: {basic,intermediate, advance, noLevel}, 
      time: {short, medium, long, noTime},
      price: {small: false, mediumPrice: true, big: false, noPrice: false},
      topic: {python, javaScript, react, java, git, frontend, backend, noTopic}
    });
  }
  const handleBigChange = () => {
    setBig(true)
    setMediumPrice(false)
    setSmall(false)
    setNoPrice(false)
    setAllFilters({
      level: {basic,intermediate, advance, noLevel}, 
      time: {short, medium, long, noTime},
      price: {small: false, mediumPrice: false, big: true, noPrice: false},
      topic: {python, javaScript, react, java, git, frontend, backend, noTopic}
    });
  }
  const handleNoPriceChange = () => {
    setNoPrice(true)
    setMediumPrice(false)
    setBig(false)
    setSmall(false)
    setAllFilters({
      level: {basic,intermediate, advance, noLevel}, 
      time: {short, medium, long, noTime},
      price: {small: false, mediumPrice: false, big: false, noPrice: true},
      topic: {python, javaScript, react, java, git, frontend, backend, noTopic}
    });
  }

  const handleOnSubmitForm = async(e) => {
    e.preventDefault();
    setTrueFilters([])
    setFiltreCourses([...courses])
    for (const filter in allFilters) {
      if(filter === 'level') {
        if(filtreCourses.length){
          if(allFilters[filter]['basic']){
            setFiltreCourses(prev => prev.filter(course => course.level.toLowerCase() === 'podstawowy'))
            setTrueFilters(prev => [...prev, 'basic'])
          } else if(allFilters[filter]['intermediate']) {
            setFiltreCourses(prev => prev.filter(course => course.level.toLowerCase() === 'średnio-zaawansowany'))
            setTrueFilters(prev => [...prev, 'intermediate'])
          } else if(allFilters[filter]['advance']) {
            setFiltreCourses(prev => prev.filter(course => course.level.toLowerCase() === 'zaawansowany'))
            setTrueFilters(prev => [...prev, 'advance'])
          }
        }
        
      } else if (filter === 'price') {
        if(filtreCourses.length){
          if(allFilters[filter]['small']){
            setFiltreCourses(prev =>prev.filter(course => course.price >= 0 && course.price <= 40))
            setTrueFilters(prev => [...prev, 'small'])
          } else if(allFilters[filter]['mediumPrice']) {
            setFiltreCourses(prev =>prev.filter(course => course.price > 40 && course.price <= 80))
            setTrueFilters(prev => [...prev, 'mediumPrice'])
          } else if(allFilters[filter]['big']) {
            setFiltreCourses(prev =>prev.filter(course => course.price > 80))
            setTrueFilters(prev => [...prev, 'big'])
          }
        }

      }  else if (filter === 'time') {
        if(filtreCourses.length){
          if(allFilters[filter]['short']){
            setFiltreCourses(prev => prev.filter(course => course.hours > 0 && course.hours <= 10))
            setTrueFilters(prev => [...prev, 'time'])
          } else if(allFilters[filter]['medium']) {
            setFiltreCourses(prev => prev.filter(course => course.hours > 10 && course.hours <= 20))
            setTrueFilters(prev => [...prev, 'medium'])
          } else if(allFilters[filter]['long']) {
            setFiltreCourses(prev => prev.filter(course => course.price > 20))
            setTrueFilters(prev => [...prev, 'long'])
          }
        }

      }  else if (filter === 'topic') {
        
        if(filtreCourses.length){
          if(allFilters[filter]['python']){
            setFiltreCourses(prev => prev.filter(course => course.topic.toLowerCase() == "python".toLowerCase()))
            setTrueFilters(prev => [...prev, 'python'])
          } else if(allFilters[filter]['javaScript']) {
            setFiltreCourses(prev => prev.filter(course => course.topic.toLowerCase() == "javaScript".toLowerCase()))
            setTrueFilters(prev => [...prev, 'javaScript'])
          } else if(allFilters[filter]['react']) {
            setFiltreCourses(prev => prev.filter(course => course.topic.toLowerCase() == "react".toLowerCase()))
            setTrueFilters(prev => [...prev, 'react'])
          } else if(allFilters[filter]['java']) {
            setFiltreCourses(prev => prev.filter(course => course.topic.toLowerCase() == "java".toLowerCase()))
            setTrueFilters(prev => [...prev, 'java'])
          } else if(allFilters[filter]['git']) {
            setFiltreCourses(prev => prev.filter(course => course.topic.toLowerCase() == "git".toLowerCase()))
            setTrueFilters(prev => [...prev, 'git'])
          } else if(allFilters[filter]['frontend']) {
            setFiltreCourses(prev => prev.filter(course => course.topic.toLowerCase() == "frontend".toLowerCase()))
            setTrueFilters(prev => [...prev, 'frontend'])
          } else if(allFilters[filter]['backend']) {
            setFiltreCourses(prev => prev.filter(course => course.topic.toLowerCase() == "backend".toLowerCase()))
            setTrueFilters(prev => [...prev, 'backend'])
          }
        }
      }
    }

    setIsSubmit(true)
  }

  useEffect(() => {
    setFiltreCourses([...courses])
  }, [courses])

  useEffect(() => {
    if(isSubmit){
      const filtersHash = trueFilters.join('#')
      setIsSubmit(false)
      history.push({
        pathname: `/filtre/`,
        search: `?`,
        hash: `${filtersHash}`,
        state: {filtreCourses}
      })

    }
  }, [isSubmit])

  window.addEventListener('resize', () => setWidthWindow(window.innerWidth))
  const handleOnClickFilters = () => setIsVisible(prev => !prev)
  const titleComponent = widthWindow > 1200 ? <h3>Filtruj</h3> :  <h3 onClick={handleOnClickFilters}>Filtruj</h3>

  return ( 
    <section className={block()}>
      <div >
        {titleComponent}
      </div>
      <article className={ isVisible ? block('filter-wrapper')+ ' ' + block('filter-wrapper-visibility') : block('filter-wrapper')}>
      <form onSubmit={handleOnSubmitForm} className={block('form-filter')}>
         <div className={block('div-form-filter')}>
          <h4>Cena</h4>
          <label htmlFor="samll"><input type="radio" name="price" id="samll" value="samll" checked={small} onChange={handleSmallChange}/>0-40 zł</label>
          <label htmlFor="mediumPrice"><input type="radio" name="price" id="mediumPrice" value="mediumPrice" checked={mediumPrice} onChange={handleMediumPriceChange}/>41-80 zł</label>
          <label htmlFor="big"><input type="radio" name="price" id="big" value="big" checked={big} onChange={handleBigChange}/>Ponad 80 zł</label>
          <label htmlFor="noPrice"><input type="radio" name="price" id="noPrice" value="noPrice" checked={noPrice} onChange={handleNoPriceChange}/>Brak</label>
        </div>
        <div className={block('div-form-filter')}>
          <h4>Temat</h4>
          <label htmlFor="python"><input type="radio" name="topic" id="python" value="python" checked={python} onChange={handlePyhonChange}/>Python</label>
          <label htmlFor="javaScript"><input type="radio" name="topic" id="javaScript" value="javaScript" checked={javaScript} onChange={handleJavaScriptChange}/>JavaScript</label>
          <label htmlFor="react"><input type="radio" name="topic" id="react" value="react" checked={react} onChange={handleReactChange}/>React</label>
          <label htmlFor="java"><input type="radio" name="topic" id="java" value="java" checked={java} onChange={handleJavaChange}/>Java</label>
          <label htmlFor="git"><input type="radio" name="topic" id="git" value="git" checked={git} onChange={handleGitChange}/>Git</label>
          <label htmlFor="frontend"><input type="radio" name="topic" id="frontend" value="frontend" checked={frontend} onChange={handleFrontendChange}/>Frontend</label>
          <label htmlFor="backend"><input type="radio" name="topic" id="backend" value="backend" checked={backend} onChange={handleBackendChange}/>Backend</label>
          <label htmlFor="noTopic"><input type="radio" name="topic" id="noTopic" value="noTopic" checked={noTopic} onChange={handleNoTopicChange}/>Brak</label>
        </div>
        <div className={block('div-form-filter')}>
          <h4>Poziom</h4>
          <label htmlFor="basic"><input type="radio" name="level" id="basic" value='basic' checked={basic} onChange={handleBasicChange}/>Podstawowy</label>
          <label htmlFor="intermediate"><input type="radio" name="level" id="intermediate" value="intermediate" checked={intermediate} onChange={handleIntermediateChange}/>Średnio-zaawansowany</label>
          <label htmlFor="advance"><input type="radio" name="level" id="advance" value="advance" checked={advance} onChange={handleAdvanceChange}/>Zaawansowany</label>
          <label htmlFor="noLevel"><input type="radio" name="level" id="noLevel" value="noLevel" checked={noLevel} onChange={handleNoLevelChange}/>Brak</label>
        </div>
         <div className={block('div-form-filter')}>
          <h4>Czas trwania</h4>
          <label htmlFor="short"><input type="radio" name="time" id="short" value="short" checked={short} onChange={handleShortChange}/>1-10h</label>
          <label htmlFor="medium"><input type="radio" name="time" id="medium" value="medium" checked={medium} onChange={handleMediumChange}/>11-20h</label>
          <label htmlFor="long"><input type="radio" name="time" id="long" value="long" checked={long} onChange={handleLongChange}/>Ponad 20h</label>
          <label htmlFor="noTime"><input type="radio" name="time" id="noTime" value="noTime" checked={noTime} onChange={handleNoTimeChange}/>Brak</label>
        </div>
        <button type="click" className={block('button-form-filter')}>Filtruj</button>
          <button hidden type="submit"></button>
      </form>
      </article>
    </section>
   );
}
 
export default AsideMenu;