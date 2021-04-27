const Planet = ({name, pop, climat}) => {
  return (
    <div className="col-md-6 col-lg-3 col-xl-3 mb-4" wfd-id="12">
      <article className="bg-warning p-3">
        <h2 className="h5">{name}</h2>
        <p className="mb-0">
          <b>population</b>
          <br />
          {pop}
        </p>
        <p className="mb-0">
          <b>climat</b>
          <br />
          {climat}
        </p>
      </article>
    </div>
  )
}

export default Planet