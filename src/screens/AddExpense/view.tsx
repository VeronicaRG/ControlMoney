import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import DatePicker from 'react-native-date-picker';
import BaseText from '../../components/BaseText';
import {theme} from '../../theme';
import {formatDate} from '../../utils/date';
import {
  AddExpense,
  AddIcon,
  Amount,
  Container,
  DataTextInput,
  DegradeButton,
  DescriptionTextInput,
  SymbolData,
  ViewData,
  ViewDescription,
} from './styles';
import {AddExpenseProps} from './type';

const AddExpenseView: React.FC<AddExpenseProps> = ({
  amount,
  setAmount,
  description,
  setDescription,
  onPressViewData,
  openModal,
  date,
  confirm,
  cancel,
  action,
  isEditing,
}) => {
  const {t} = useTranslation();

  return (
    <Container>
      <BaseText size="h1" color={theme.colors.neutral._99}>
        {t('AddExpense.title')}
      </BaseText>

      <Amount>
        <CurrencyInput
          style={{
            fontSize: theme.fontSizes.h1,
            fontFamily: theme.fonts.medium,
          }}
          value={amount}
          onChangeValue={(newValue: number | null) => setAmount(newValue || 0)}
          prefix="$"
          delimiter=","
          separator="."
          precision={2}
        />
      </Amount>
      <View>
        {isEditing ? (
          <ViewDescription>
            <SymbolData source={require('../../assets/images/date.png')} />
            <DescriptionTextInput
              value={description}
              onChangeText={setDescription}
              placeholder={t('AddExpense.descriptionInput')}
            />
          </ViewDescription>
        ) : (
          <>
            <BaseText size="h3">{t('AddExpense.description')}</BaseText>
            <ViewDescription>
              <SymbolData source={require('../../assets/images/date.png')} />
              <DescriptionTextInput
                value={description}
                onChangeText={setDescription}
                placeholder={t('AddExpense.descriptionInput')}
              />
            </ViewDescription>
          </>
        )}
      </View>
      <View>
        {isEditing ? (
          <>
            <ViewData onPress={onPressViewData}>
              <SymbolData source={require('../../assets/images/date.png')} />
              <DataTextInput>
                <BaseText size="h5">{formatDate(date)}</BaseText>
              </DataTextInput>
            </ViewData>
            <DatePicker
              modal
              mode="date"
              open={openModal}
              date={date}
              onConfirm={confirm}
              onCancel={cancel}
            />
          </>
        ) : (
          <>
            <BaseText size="h3">{t('AddExpense.data')}</BaseText>
            <ViewData onPress={onPressViewData}>
              <SymbolData source={require('../../assets/images/date.png')} />
              <DataTextInput>
                <BaseText size="h5">{formatDate(date)}</BaseText>
              </DataTextInput>
            </ViewData>
            <DatePicker
              modal
              mode="date"
              open={openModal}
              date={date}
              onConfirm={confirm}
              onCancel={cancel}
            />
          </>
        )}
      </View>
      <AddExpense />
      <AddExpense onPress={action}>
        <DegradeButton>
          {isEditing ? (
            <BaseText size="h1">✏️ </BaseText>
          ) : (
            <AddIcon source={require('../../assets/images/add.png')} />
          )}
        </DegradeButton>
      </AddExpense>
    </Container>
  );
};

export default AddExpenseView;
