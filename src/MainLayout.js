import React from 'react';
import { Outlet } from 'react-router'; 
import styled from 'styled-components';

const MainLayoutRoot = styled('div')(({ theme }) => ({
  overflow: 'hidden',
}));

const MainLayoutWrapper = styled('div')({
  display: 'flex',
  flex: 'auto',
  overflow: 'hidden',
});

const MainLayoutContainer = styled('div')({
  display: 'flex',
  flex: 'auto',
  overflow: 'hidden',
});

const MainLayoutContent = styled('div')({
  flex: 'auto',
  height: '100%',
  overflow: 'auto',
});

const MainLayout = () => (
  <MainLayoutRoot>

    <MainLayoutWrapper>

      <MainLayoutContainer>
        <MainLayoutContent>
        {/* children components*/}
          <Outlet /> 
        </MainLayoutContent>
      </MainLayoutContainer>
    </MainLayoutWrapper>
  </MainLayoutRoot>
);

export default MainLayout;