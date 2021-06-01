import { List, Button, Row } from 'antd'
import { useState } from 'react'
import { dataTecnologi } from '../../Interfaces'

const ShowList = ({ data }: dataTecnologi): JSX.Element => {
  const [ShowList, setShowList] = useState<boolean>()

  const showList = (): void => {
    ShowList ? setShowList(false) : setShowList(true)
  }

  return (
    <Row justify='start'>
      <Button size='small' type='link' onClick={showList}>
        Mostrar tecnologías utilizadas
      </Button>
      <List
        style={{
          display: `${ShowList ? 'block' : 'none'}`,
        }}
        size='small'
        split={false}
        dataSource={data}
        renderItem={(item: string): JSX.Element => (
          <List.Item
            style={{
              color: '#fff',
            }}
          >
            {item}
          </List.Item>
        )}
      />
    </Row>
  )
}

export default ShowList
