import React from 'react'
import CollectionItem from './CollectionItem'
import Basic_sofa from './BasicItems/BasicSofas';
import { useTranslation } from 'react-i18next';

export default function Basic() {
  const { t } = useTranslation();
  const data = [
    {
      title: t("Pages.collection.sofas"),
      path: "sofa",
      data: Basic_sofa,
    },
  ]
  return (
    <CollectionItem data={data} collection="basic" />
  )
}