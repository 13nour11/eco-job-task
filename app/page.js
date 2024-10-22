import { Card, Text, Icon } from '@ui5/webcomponents-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Overview</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link href="/items">
          <Card header={<Text>Items Page</Text>} style={{ width: '200px' }}>
            <Icon name="list" style={{ fontSize: '48px' }} />
          </Card>
        </Link>
        <Card header={<Text>List</Text>} style={{ width: '200px' }}>
          <Icon name="list" style={{ fontSize: '48px' }} />
        </Card>
        <Card header={<Text>List</Text>} style={{ width: '200px' }}>
          <Icon name="list" style={{ fontSize: '48px' }} />
        </Card>
      </div>
    </div>
  );
}
