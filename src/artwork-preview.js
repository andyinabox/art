var React = require('react')

var ArtworkImage = require('./artwork-image')
var Markdown = require('./markdown')
var Peek = require('./peek')

var ArtworkPreview = React.createClass({
  render() {
    var {art, style} = this.props

    return (
      <div className='objects-focus' style={style}>
        <h2>{art.title}, <span className='date'>{art.dated}</span></h2>
        <h5><Peek facet="artist">{art.artist}</Peek></h5>
        <ArtworkImage art={art} id={art.id} />
        <h6><Peek facet="room">{art.room}</Peek></h6>
        <div className='tombstone'>
          {art.medium}<br />
          {art.dimension}<br/>
          {`${art.creditline} ${art.accession_number}`}
        </div>
        <Markdown>{art.text}</Markdown>
      </div>
    )
  },
})

module.exports = ArtworkPreview
