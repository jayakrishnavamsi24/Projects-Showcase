import styled from 'styled-components'

export const BgContainer = styled.div`
  margin-left: 80px;
`

export const SelectCategoryInput = styled.select`
  padding: 10px;
  width: 30%;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  margin-top: 40px;
  margin-bottom: 40px;
  outline: none;
  cursor: pointer;
`

export const ProjectsContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-left: 0;
  margin: 0;
`

export const LoaderContainer = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureContainer = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FailureImage = styled.img`
  margin-bottom: 15px;
  margin-top: 20px;
  width: 45%;
  max-width: 500px;
`

export const FailureHeading = styled.h1`
  color: #475569;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  margin-bottom: -5px;
`

export const FailureInfo = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
`

export const FailureRetryButton = styled.button`
  background-color: #328af2;
  color: #ffffff;
  border-radius: 4px;
  border: none;
  outline: none;
  padding: 10px 25px 10px 25px;
`
