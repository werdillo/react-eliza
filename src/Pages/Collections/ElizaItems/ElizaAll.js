import React from 'react'

import ElizaBeds from '../ElizaItems/ElizaBeds'
import ElizaChairs from '../ElizaItems/ElizaChairs'
import ElizaPufs from '../ElizaItems/ElizaPuffs'
import ElizaSofaBeds from '../ElizaItems/ElizaSofaBeds'
import ElizaSofas from '../ElizaItems/ElizaSofas'
import ElizaTahtas from '../ElizaItems/ElizaTahtas'

export default function ElizaAll() {
  return (
	<div>
		<ElizaSofas />
		<ElizaSofaBeds />
		<ElizaBeds />
		<ElizaChairs />
		<ElizaPufs />
		<ElizaTahtas />
	</div>
  )
}
