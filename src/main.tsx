import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { PageContainer } from './components/PageContainer'
import { Header } from './components/Header'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { Badge } from './components/Badge'
import { Navbar } from './components/Navbar'
import { Toggle } from './components/Toggle'
import { Input } from './components/Input'
import { Dropdown } from './components/Dropdown'
import { Avatar } from './components/Avatar'
import { Alert } from './components/Alert'
import { StatCard } from './components/StatCard'
import { Modal } from './components/Modal'
import { ProgressBar } from './components/ProgressBar'
import { Table } from './components/Table'
import { Tabs } from './components/Tabs'
import { GridLayout } from './components/GridLayout'
import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'
import { Tooltip } from './components/Tooltip'
import { SkeletonLoader } from './components/SkeletonLoader'
import { Divider } from './components/Divider'
import { Spinner } from './components/Spinner'
import { Breadcrumbs } from './components/Breadcrumbs'
import './styles/theme.css'

const Sandbox = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('option1');
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  // Side effect for dark mode class
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflowX = 'hidden';
    document.body.style.width = '100%';
    const root = document.getElementById('root');
    if (root) {
      root.style.width = '100%';
      root.style.overflowX = 'hidden';
    }
  }, []);

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    }}>
      <Navbar
        projectName="SirSluginston Co"
        logo={<Avatar fallback="S" size={40} />}
        accountIcon={<Avatar fallback="A" size={40} />}
        items={[
          { label: 'Dashboard' },
          { label: 'Projects', children: [ { label: 'Project A', onClick: () => {} }, { label: 'Project B', onClick: () => {} } ] },
          { label: 'Admin' },
        ]}
      />
      <PageContainer>
        <Header
          title="SirSluginston OS - Full Shared UI Demo"
          subtitle="Visual testbed for all Shared UI library components"
        />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
          width: '100%',
          maxWidth: '1200px',
        }}>
          {/* Theme & Toggle */}
          <Card title="Theme Control">
            <p style={{ color: 'var(--dark-color)', marginBottom: '1rem', opacity: 0.8 }}>
              Toggle the switch to test global dark/light modes.
            </p>
            <Toggle
              label={isDarkMode ? 'Dark Mode Active' : 'Light Mode Active'}
              isOn={isDarkMode}
              onToggle={() => setIsDarkMode(!isDarkMode)}
            />
          </Card>

          {/* Basics */}
          <Card title="Buttons, Badge, Input, Dropdown, Avatar">
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Button label="Primary (Brand)" variant="primary" />
              <Button label="Secondary (Project)" variant="secondary" />
              <Button label="Outline Mode" variant="outline" />
              <Badge label="NEW" />
              <Badge label="Timer" variant="outline" />
              <Avatar fallback="A" />
              <Avatar src="https://avatars.githubusercontent.com/u/9919?s=200" alt="GH" />
            </div>
            <Divider />
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <Input label="Text Input" placeholder="Type here..." />
              <Dropdown
                label="Example Dropdown"
                options={[{ label: 'Option 1', value: 'option1' }, { label: 'Option 2', value: 'option2' }]}
                value={dropdownValue}
                onChange={setDropdownValue}
              />
            </div>
          </Card>

          {/* Alert, StatCard, ProgressBar, Spinner, Skeleton, Tooltip */}
          <Card title="Data Display & UX Utilities">
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Alert type="info" message="This is an info alert!" />
              <Alert type="success" message="Success!" />
              <Alert type="error" message="Error!" />
              <Alert type="warning" message="Warning!" />
            </div>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <StatCard label="Users" value="103" />
              <StatCard label="Revenue" value="$1,293" icon={<span>💸</span>} />
            </div>
            <Divider />
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <ProgressBar value={42} label="Loading Data" />
              <Spinner />
              <SkeletonLoader width={120} height={20} />
              <Tooltip content="Here is a tooltip!">
                <Button label="Hover me" variant="primary" />
              </Tooltip>
            </div>
          </Card>

          {/* Layout & Navigation */}
          <Card title="Tabs, Grid Layout, Sidebar, Breadcrumbs, Footer">
            <Tabs
              tabs={[
                { label: 'Tab 1', content: <div>Tab 1 content stuff</div> },
                { label: 'Tab 2', content: <div>Tab 2 content here too</div> },
                { label: 'Tab 3', content: <div>Tab 3 content as well</div> },
              ]}
              activeIndex={activeTab}
              onTabClick={setActiveTab}
            />
            <Divider />
            <Breadcrumbs
              items={[
                { label: 'Home' },
                { label: 'Admin', onClick: () => {} },
                { label: 'Analytics', onClick: () => {} },
                { label: 'Current Page' },
              ]}
            />
            <Divider />
            <div style={{ display: 'flex', gap: '2rem' }}>
              <Sidebar>
                <p>Sidebar content (filters, nav, widgets...)</p>
              </Sidebar>
              <GridLayout columns={2}>
                <Card title="Project Card">Grid Card 1</Card>
                <Card title="Project Card">Grid Card 2</Card>
                <Card title="Project Card">Grid Card 3</Card>
                <Card title="Project Card">Grid Card 4</Card>
              </GridLayout>
            </div>
          </Card>

          {/* Table */}
          <Card title="Table">
            <Table
              columns={['Name', 'Role', 'Status']}
              data={[
                ['Alice', 'Admin', 'Active'],
                ['Bob', 'Developer', 'Pending'],
                ['Carol', 'Designer', 'Inactive'],
              ]}
            />
          </Card>

          {/* Modal Example */}
          <Card title="Modal Example">
            <Button label="Open Modal" onClick={() => setModalOpen(true)} />
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
              <h2>Modal Title</h2>
              <p style={{ marginBottom: 'var(--space-md)' }}>This is an example modal dialog! Click outside this box to close.</p>
              <Button label="Close" onClick={() => setModalOpen(false)} variant="primary" />
            </Modal>
          </Card>

          <Footer />
        </div>
      </PageContainer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Sandbox />
  </React.StrictMode>,
)
