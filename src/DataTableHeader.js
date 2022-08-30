import { useRef, useState, useEffect } from 'react'

export const DataTableHeader = ({ keyLabels }) => {
  // check what type of layout you want to populate gridLayout: true for css grid style or false/undefined for html table style
  const [stuck, setStuck] = useState(false)
  const headerRef = useRef()

  useEffect(() => {
    const cachedRef = headerRef.current
    const observer = new IntersectionObserver(
      ([e]) => setStuck(e.intersectionRatio < 1),
      { threshold: [1] }
    )
    observer.observe(cachedRef)
    return () => observer.unobserve(cachedRef)
  }, [])

  let headerCellClass

  if (stuck) headerCellClass = `stuck`

  const tableHeaders = Object.entries(keyLabels).map(([idKey, label]) =>
    <th className={headerCellClass || undefined} key={idKey}>{label}</th>
  )


  return (
    <thead ref={headerRef}>
      <tr>
        {tableHeaders}
        <th className={headerCellClass || undefined}>options</th>
      </tr>
    </thead>
  )
}