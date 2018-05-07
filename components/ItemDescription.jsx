import React from 'react'
import styled from 'react-emotion'
import { Row, Text, palette } from './styleguide'

function getColor(damageColor, primaryStatType) {
  return primaryStatType === 'ATTACK'
    ? damageColor
      ? damageColor
      : palette.background
    : palette.background
}

const DamageIcon = styled('img')`
  width: 40px;
  margin-right: 4px;
`

const RowOffset = styled(Row)`
  margin-bottom: 8px;
`

const Stat = styled(Text)`
  color: ${props =>
    getColor(props.damageColor, props.primaryStatType)} !important;
  margin-left: 8px;
`

const StatValue = styled(Text)`
  color: ${props =>
    getColor(props.damageColor, props.primaryStatType)} !important;
`

export default props => {
  return (
    <div>
      {props.item.instance &&
        props.item.instance.primaryStat &&
        props.item.instance.primaryStat.value > 0 && (
          <RowOffset justify="start">
            {props.damageIconPath && (
              <DamageIcon src={`https://bungie.net${props.damageIconPath}`} />
            )}
            <StatValue
              primaryStatType={props.primaryStatType}
              damageColor={props.damageColor}
              bold
              size={4}>
              {props.item.instance ? props.item.instance.primaryStat.value : 0}
            </StatValue>
            <Stat
              primaryStatType={props.primaryStatType}
              damageColor={props.damageColor}>
              {props.item.instance && props.primaryStatType}
            </Stat>
          </RowOffset>
        )}
      <Text gray italic>
        {props.item.displayProperties.description}
      </Text>
    </div>
  )
}
