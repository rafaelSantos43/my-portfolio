import './section.css'
export default function Section() {

  return (
    <>
      <div className='container__section'>
        <div className='section__img'>
          <img className='img__section' src="/assets/img/img1.jpg" alt="" />
          <div className='section__text'>
            <span className='section__title'>REd Scocial</span>
            <p className='section__paragrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga libero autem aspernatur. Voluptate quos sunt deleniti,
              enim autem eaque assumenda ab at eos inventore animi minus similique vero placeat ea!</p>
          </div>
        </div>

        <div className='section__img'>
          <img className='img__section' src="/assets/img/img2.jpg" alt="" />
          <div className='section__text'>
            <span className='section__title'>fundacion</span>
            <p className='section__paragrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga libero autem aspernatur. Voluptate quos sunt deleniti,
              enim autem eaque assumenda ab at eos inventore animi minus similique vero placeat ea!</p>
          </div>
        </div>

        <div className='section__img'>
          <img className='img__section' src="/assets/img/img1.jpg" alt="" />
          <div className='section__text'>
            <span className='section__title'>hospital</span>
            <p className='section__paragrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga libero autem aspernatur. Voluptate quos sunt deleniti,
              enim autem eaque assumenda ab at eos inventore animi minus similique vero placeat ea!</p>
          </div>
        </div>

        <div className='section__img'>
          <img className='img__section' src="/assets/img/img2.jpg" alt="" />
          <div className='section__text'>
            <span className='section__title'>e-comerce</span>
            <p className='section__paragrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga libero autem aspernatur. Voluptate quos sunt deleniti,
              enim autem eaque assumenda ab at eos inventore animi minus similique vero placeat ea!</p>
          </div>
        </div>

      </div>
    </>
  )
}